const crypto = require("crypto-js");

module.exports = (Sequelize, DataTypes) => {
	const Package = Sequelize.define("package", {
		id: {
			type: DataTypes.STRING(32),
			primaryKey: true,
			unique: true,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		identifier: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		shortDescription: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		detailedDescription: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		minOSVersion: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		maxOSVersion: {
			type: DataTypes.STRING
		},
		accountId: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		visible: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		icon: {
			type: DataTypes.STRING
		},
		screenshots: {
			type: DataTypes.TEXT,
			defaultValue: JSON.stringify({
				iphone: [],
				ipad: []
			})
		},
		bugsReportURL: {
			type: DataTypes.TEXT
		}
	}, {
		hooks: {
			beforeCreate: (packageObj, options) => {
				packageObj.dataValues.id = crypto.SHA256(packageObj.dataValues.id).toString(crypto.enc.Hex).substr(0, 32);

				return packageObj;
			}
		}
	});
	
	Package.associate = ({ Account, PackageVersion, PackageVersionReview }) => {
		Package.belongsTo(Account, {
			foreignKey: "accountId",
			onDelete: "CASCADE"
		});
		Package.hasMany(PackageVersion, {
			foreignKey: "packageId",
			as: "versions",
			onDelete: "CASCADE"
		});
		
		Package.hasOne(PackageVersion, {
			foreignKey: "packageId",
			as: "latestVersion",
			onDelete: "CASCADE"
		});
		
		Package.hasMany(PackageVersionReview, {
			foreignKey: "packageId",
			as: "recentReviews"
		})
	}
	
	return Package;
}