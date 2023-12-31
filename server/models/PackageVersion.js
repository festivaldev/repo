const crypto = require("crypto-js");

module.exports = (Sequelize, DataTypes) => {
	const PackageVersion = Sequelize.define("packageVersion", {
		id: {
			type: DataTypes.STRING(32),
			primaryKey: true,
			unique: true,
			allowNull: false
		},
		packageId: {
			type: DataTypes.STRING(32),
			allowNull: false,
			references: {
				model: "packages",
				key: "id"
			}
		},
		version: {
			type: DataTypes.STRING,
			defaultValue: "1.0",
			allowNull: false
		},
		changeText: {
			type: DataTypes.TEXT,
			defaultValue: "Initial release",
			allowNull: false
		},
		visible: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		downloadCount: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		}
	}, {
		hooks: {
			beforeCreate: (versionObj, options) => {
				versionObj.dataValues.id = crypto.SHA256(versionObj.dataValues.id).toString(crypto.enc.Hex).substr(0, 32);

				return versionObj;
			}
		}
	});
	
	PackageVersion.associate = ({ PackageVersionReview, PackageFile }) => {
		PackageVersion.hasMany(PackageVersionReview, {
			as: "recentReviews",
			onDelete: "CASCADE"
		});
		
		PackageVersion.hasOne(PackageFile, {
			as: "raw",
			foreignKey: "packageVersionId",
			onDelete: "CASCADE"
		});
	}
	
	return PackageVersion;
}