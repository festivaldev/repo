const Path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const serveStatic = require("serve-static");
const { Bzip2, Stream } = require("compressjs");
const fs = require("fs");
const crypto = require("crypto-js");

const currentWeek = () => {
	let today = new Date();
	let firstDayOfYear = new Date(today.getFullYear(), 0, 1);
	let pastDaysOfYear = (today - firstDayOfYear) / 86400000;
	return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() - 1) / 7);
}

//#region Database Connection Setup
const Sequelize = require("sequelize");
const { DB_NAME, DB_USER, DB_PASS } = process.env;

let ORM = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
	dialect: "mysql",
	dialectOptions: process.env.NODE_ENV == "production" ? "" : {
		socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
	},
	operatorsAliases: false,
	logging: false
});

let _models = require("./models");
const models = {};
Object.keys(_models).forEach(model => {
	models[model] = _models[model](ORM, Sequelize);
});
Object.keys(models).forEach(model => {
	if (models[model].associate) {
		models[model].associate(models);
	}
});

(async () => {
	await ORM.sync({
		//alter: true
	}).catch(error => {
		console.log(error);
	});	
	
	// Perform some cleanup
	models.DeviceLinkNonce.destroy({
		truncate: true
	});
})()
//#endregion

//#region HTTP Server Setup
const { SERVER_PORT, DESCRIPTION_URL } = process.env;

const ApiController = require("./controllers");
const httpServer = express();
httpServer.use(cors());
httpServer.use(bodyParser.json());
httpServer.use(cookieParser());

httpServer.use("/api", (req, res, next) => {
	req.models = models;
	return next();
});
httpServer.use("/api", ApiController);

httpServer.use(['/Release', '/./Release'], async (req, res, next) => {
	res.header("Content-Type", "text/plain");
	
	let repoInfo = await models.RepoInfo.findOne({
		raw: true
	});
	
	let _repoInfo = Object.keys(repoInfo).map(key => `${key}: ${repoInfo[key]}`);
	return res.status(200).send(_repoInfo.join("\n") + "\n");
});

const getPackages = () => {
	return new Promise(async (resolve, reject) => {
		let packages = await models.Package.findAll({
			where: {
				visible: true
			},
			raw: true
		});
		
		let packageVersions = await models.PackageVersion.findAll({
			where: {
				visible: true
			},
			raw: true
		});
		
		let packageFiles = await models.PackageFile.findAll({
			order: [["createdAt", "DESC"]],
			raw: true
		});
		
		/*let _packages = packageFiles.map(packageObj => {
			let packageEntry = packages.find(_ => _.identifier === packageObj.package);
			if (!packageEntry) return;
			
			let versionEntry = packageVersions.find(_ => _.packageId === packageEntry.id && _.version === packageObj.version);
			if (!versionEntry) return;
			
			let _packageObj = JSON.parse(JSON.stringify({
				"Package": packageObj.package,
				"Name": packageObj.name,
				"Depiction": `${DESCRIPTION_URL}/${packageObj.package}`,
				"Description": packageEntry.shortDescription,
				"Version": packageObj.version,
				"Author": packageObj.author,
				"Maintainer": packageObj.maintainer,
				"Architecture": "iphoneos-arm",
				"Depends": JSON.parse(packageObj.depends).length ? JSON.parse(packageObj.depends).join(", ") : undefined,
				"Conflicts": JSON.parse(packageObj.conflicts).length ? JSON.parse(packageObj.conflicts).join(", ") : undefined,
				"Filename": packageObj.filename,
				"MD5sum": packageObj.md5sum,
				"SHA1": packageObj.sha1,
				"SHA256": packageObj.sha256,
				"Section": packageObj.section,
				"Size": packageObj.size,
				"Installed-Size": packageObj.installedSize
			}));
			
			return Object.keys(_packageObj).map(key => `${key}: ${_packageObj[key]}`).join("\n");
		});*/
		
		let _packages = [];
		
		packageFiles.forEach(packageFileObj => {
			let packageObj = packages.find(_ => _.identifier === packageFileObj.package);
			if (!packageObj) return;
			
			let packageVersionObj = packageVersions.find(_ => _.packageId === packageObj.id && _.version === packageFileObj.version);
			if (!packageVersionObj) return;
			
			let packageEntry = {
				"Package": packageFileObj.package,
				"Name": packageFileObj.name,
				"Depiction": `${DESCRIPTION_URL}/${packageFileObj.package}`,
				"Description": packageObj.shortDescription,
				"Version": packageFileObj.version,
				"Author": packageFileObj.author,
				"Maintainer": packageFileObj.maintainer,
				"Architecture": packageFileObj.architecture,
				"Depends": JSON.parse(packageFileObj.depends).length ? JSON.parse(packageFileObj.depends).join(", ") : "",
				"Conflicts": JSON.parse(packageFileObj.conflicts).length ? JSON.parse(packageFileObj.conflicts).join(", ") : "",
				"Filename": packageFileObj.filename,
				"MD5sum": packageFileObj.md5sum,
				"SHA1": packageFileObj.sha1,
				"SHA256": packageFileObj.sha256,
				"Section": packageFileObj.section,
				"Size": packageFileObj.size,
				"Installed-Size": packageFileObj.installedSize
			}
			
			_packages.push(Object.entries(packageEntry).map(([key, value]) => `${key}: ${value}`).join("\n"));
		});
		
		resolve(_packages.join("\n\n"));
	});
}

httpServer.use(['/Packages', '/./Packages'], async (req, res, next) => {
	res.setHeader("Content-Type", "text/plain");
	res.removeHeader('Content-Encoding');
	
	let packages = await getPackages();
	
	return res.status(200).send(packages);
});

httpServer.use(['/Packages.bz2', '/./Packages.bz2'], async (req, res, next) => {
	// res.setHeader("Content-Type", "application/x-bzip2");
	res.removeHeader('Content-Encoding');
	
	let packages = await getPackages();
	let buffer = Buffer.from(packages, "utf8");
	
	let writable = new Stream();
	writable.buffer = Buffer.alloc(buffer.length);
	writable.pos = 0;
	writable.flush = function() {
		res.write(this.buffer, "binary");
		res.end(null, "binary");
		this.pos = 0;
	}
	writable.writeByte = function(_byte) {
		if (this.pos >= this.buffer.length) this.flush();
		this.buffer[this.pos++] = _byte;
	}
	writable.buffer.fill(0);
	
	let compressedData = await Bzip2.compressFile(buffer, writable);
});

httpServer.use(["/files", "/./files"], (req, res, next) => {
	const serve = serveStatic(Path.join(__dirname, "../files"));
	
	if (fs.existsSync(Path.join(__dirname, "..", req._parsedUrl.path))) {
		models.Statistic.findOrCreate({
			where: {
				year: new Date().getFullYear(),
				month: new Date().getMonth(),
				week: currentWeek()
			},
			defaults: {
				id: crypto.SHA256(String(new Date().getTime())).toString(crypto.enc.Hex).substr(0, 32)
			}
		}).spread(statisticsObj => {
			statisticsObj.update({
				downloads: ++statisticsObj.downloads
			});
			
			let filename = req._parsedUrl.path.match(/^(\/|\/.\/)files\/(.*)\.deb$/)[2];
			
			models.PackageFile.findOne({
				where: {
					filename: {
						[Sequelize.Op.like]: `%${filename}%`
					}
				}
			}).then(packageFileObj => {
				if (!packageFileObj) return;
				
				models.PackageVersion.findOne({
					where: {
						id: packageFileObj.packageVersionId,
						packageId: packageFileObj.packageId,
					}
				}).then(packageVersionObj => {
					if (!packageVersionObj) return;
					
					packageVersionObj.update({
						downloadCount: ++packageVersionObj.downloadCount
					});
				});
			});
			
			return serve(req, res);
		});
	} else {
		return res.status(404).send({
			name: "Not Found",
			code: 404,
			message: "File not found"
		});
	}
});

// httpServer.use(async (req, res, next) => {
// 	res.statusMessage = "We're currently experiencing technical issues with Cydia parsing the Packages file. A fix is being worked on, sorry for the inconvenience (we'll be back soon!)";
// 	return res.status(503).end();
// });

httpServer.use("/", serveStatic(Path.join(__dirname, "../static")));
httpServer.use("/resources", serveStatic(Path.join(__dirname, "../resources")));

if (process.argv.indexOf("--no-admin") < 0) {
	httpServer.use("/admin", serveStatic(Path.join(__dirname, "../admin/dist")));
} else {
	console.log("'--no-admin' is set, not serving /admin");
}

if (process.argv.indexOf("--no-client") < 0) {
	httpServer.use("/", serveStatic(Path.join(__dirname, "../client/dist")));
} else {
	console.log("'--no-client' is set, not serving /");
}

httpServer.listen(SERVER_PORT, (error) => {
	if (error) throw error;
	
	console.log(`\x1b[32m>\x1b[39m Server running on http://localhost:${SERVER_PORT}`);
});
//#endregion