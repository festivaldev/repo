// Thanks to atwiiks for the nonce idea
const crypto = require("crypto-js");

module.exports = (Sequelize, DataTypes) => {
	const DeviceLinkNonce = Sequelize.define("deviceLinkNonce", {
		id: {
			type: DataTypes.STRING(32),
			primaryKey: true,
			unique: true,
			allowNull: false
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
			beforeCreate: (nonceObj, options) => {
				nonceObj.dataValues.id = crypto.SHA256(nonceObj.dataValues.id).toString(crypto.enc.Hex).substr(0, 32);

				return nonceObj;
			}
		}
	});
	
	return DeviceLinkNonce;
}