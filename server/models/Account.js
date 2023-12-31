const crypto = require("crypto-js");

module.exports = (Sequelize, DataTypes) => {
	const Account = Sequelize.define("account", {
		id: {
			type: DataTypes.STRING(32),
			primaryKey: true,
			unique: true,
			allowNull: false
		},
		username: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		role: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: -1
		},
		profileImage: {
			type: DataTypes.STRING
		},
		lastLogin: {
			type: DataTypes.DATE
		},
		active: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		}
	}, {
		hooks: {
			beforeCreate: (accountObj, options) => {
				accountObj.dataValues.id = crypto.SHA256(accountObj.dataValues.id).toString(crypto.enc.Hex).substr(0, 32);
				accountObj.dataValues.password = crypto.SHA256(accountObj.dataValues.password).toString(crypto.enc.Hex);

				return accountObj;
			}
		}
	});
	
	Account.prototype.usernameValid = function(_username) {
		return this.username === _username;
	}
	Account.prototype.passwordValid = function(_password) {
		return crypto.SHA256(this.password).toString(crypto.enc.Hex) === crypto.SHA256(_password).toString(crypto.enc.Hex);
	}
	
	Account.associate = ({ Device }) => {
		Account.hasMany(Device, {
			foreignKey: "accountId",
			as: "devices",
			onDelete: "CASCADE"
		})
	}
	
	return Account;
}