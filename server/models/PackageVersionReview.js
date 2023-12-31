const crypto = require("crypto-js");

module.exports = (Sequelize, DataTypes) => {
	const PackageVersionReview = Sequelize.define("packageVersionReview", {
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
		packageVersionId: {
			type: DataTypes.STRING(32),
			allowNull: false,
			references: {
				model: "packageVersions",
				key: "id"
			}
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		accountId: {
			type: DataTypes.STRING(32),
			allowNull: false,
			references: {
				model: "accounts",
				key: "id"
			}
		},
		deviceId: {
			type: DataTypes.STRING(32),
			allowNull: false,
			references: {
				model: "devices",
				key: "id"
			}
		}
	}, {
		hooks: {
			beforeCreate: (reviewObj, options) => {
				reviewObj.dataValues.id = crypto.SHA256(reviewObj.dataValues.id).toString(crypto.enc.Hex).substr(0, 32);

				return reviewObj;
			}
		}
	});
	
	PackageVersionReview.associate = ({ Device, PackageVersionReviewMessage, PackageVersionRating }) => {
		PackageVersionReview.belongsTo(Device, {
			foreignKey: "deviceId",
			as: "device",
			onDelete: "CASCADE"
		});
		PackageVersionReview.hasMany(PackageVersionReviewMessage, {
			foreignKey: "packageVersionReviewId",
			as: "messages",
			onDelete: "CASCADE"
		});
		PackageVersionReview.hasOne(PackageVersionRating, {
			foreignKey: "packageVersionReviewId",
			as: "rating",
			onDelete: "CASCADE"
		});
	}
	
	return PackageVersionReview;
}