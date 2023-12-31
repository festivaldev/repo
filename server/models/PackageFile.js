const crypto = require("crypto-js");

module.exports = (Sequelize, DataTypes) => {
	const PackageFile = Sequelize.define("packageFile", {
		id: {
			type: DataTypes.STRING(32),
			primaryKey: true,
			unique: true,
			allowNull: false
		},
		packageId: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		packageVersionId: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		package: {
			type: DataTypes.STRING,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		version: {
			type: DataTypes.STRING,
			allowNull: false
		},
		architecture: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: "iphoneos-arm"
		},
		author: {
			type: DataTypes.STRING,
			allowNull: false
		},
		maintainer: {
			type: DataTypes.STRING
		},
		depends: {
			type: DataTypes.STRING,
		},
		conflicts: {
			type: DataTypes.STRING,
		},
		filename: {
			type: DataTypes.STRING,
			allowNull: false
		},
		md5sum: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		sha1: {
			type: DataTypes.STRING,
			allowNull: false
		},
		sha256: {
			type: DataTypes.STRING,
			allowNull: false
		},
		section: {
			type: DataTypes.STRING,
			defaultValue: "Tweaks",
		},
		size: {
			type: DataTypes.INTEGER
		},
		installedSize: {
			type: DataTypes.INTEGER
		}
	}, {
		hooks: {
			beforeCreate: (versionObj, options) => {
				versionObj.dataValues.id = crypto.SHA256(versionObj.dataValues.id).toString(crypto.enc.Hex).substr(0, 32);

				return versionObj;
			}
		}
	});
	
	PackageFile.associate = ({ Package, PackageVersion }) => {
		PackageFile.belongsTo(Package, {
			foreignKey: "packageId",
			targetKey: "id",
			onDelete: "CASCADE",
			as: "PackageId"
		});
		
		PackageFile.belongsTo(Package, {
			foreignKey: "package",
			targetKey: "identifier",
			onDelete: "CASCADE",
			as: "Package"
		});
	}
	
	return PackageFile;
}