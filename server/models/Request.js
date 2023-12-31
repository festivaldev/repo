module.exports = (Sequelize, DataTypes) => {
	const Request = Sequelize.define("request", {
		id: {
			type: DataTypes.STRING(32),
			primaryKey: true,
			unique: true,
			allowNull: false
		},
		accountId: {
			type: DataTypes.STRING(32),
			unique: true,
			allowNull: false,
			references: {
				model: "accounts",
				key: "id"
			}
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		status: {
			type: DataTypes.INTEGER,
			defaultValue: -1
		},
		reviewedBy: {
			type: DataTypes.STRING(32),
			references: {
				model: "accounts",
				key: "id"
			}
		},
		reason: {
			type: DataTypes.TEXT
		}
	});
	
	return Request;
}