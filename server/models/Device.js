const crypto = require("crypto-js");

module.exports = (Sequelize, DataTypes) => {
	const Device = Sequelize.define("device", {
		id: {
			type: DataTypes.STRING(32),
			primaryKey: true,
			unique: true,
			allowNull: false
		},
		product: {
			// eg. iPhone8,1
			type: DataTypes.STRING,
			allowNull: false
		},
		version: {
			// eg. 15E302
			type: DataTypes.STRING,
			allowNull: false
		},
		udid: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false
		},
		variant: {
			type: DataTypes.STRING
		},
		capacity: {
			type: DataTypes.INTEGER
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
			beforeCreate: (deviceObj, options) => {
				deviceObj.dataValues.id = crypto.SHA256(deviceObj.dataValues.id).toString(crypto.enc.Hex).substr(0, 32);

				return deviceObj;
			}
		}
	});
	
	return Device;
}