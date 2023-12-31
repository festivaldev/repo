const crypto = require("crypto-js");

module.exports = (Sequelize, DataTypes) => {
	const PackageVersionReviewMessage = Sequelize.define("packageVersionReviewMessage", {
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
			type: DataTypes.STRING,
			references: {
				model: "packageVersions",
				key: "id"
			}
		},
		packageVersionReviewId: {
			type: DataTypes.STRING,
			references: {
				model: "packageVersionReviews",
				key: "id"
			}
		},
		text: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		fromDeveloper: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		},
		accountId: {
			type: DataTypes.STRING(32),
			allowNull: false,
			references: {
				model: "accounts",
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
	
	return PackageVersionReviewMessage;
}