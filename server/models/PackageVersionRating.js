const crypto = require("crypto-js");

module.exports = (Sequelize, DataTypes) => {
	const PackageVersionRating = Sequelize.define("packageVersionRating", {
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
		packageVersionReviewId: {
			type: DataTypes.STRING(32),
			allowNull: false,
			references: {
				model: "packageVersionReviews",
				key: "id"
			}
		},
		value: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 1,
			validate: { min: 1, max: 5 }
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
	
	return PackageVersionRating;
}