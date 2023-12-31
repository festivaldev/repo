module.exports = (Sequelize, DataTypes) => {
	const Statistic = Sequelize.define("statistic", {
		id: {
			type: DataTypes.STRING(32),
			primaryKey: true,
			unique: true,
			allowNull: false
		},
		year: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		month: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		week: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		downloads: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
		reviews: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
		accountCreations: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
		packageUploads: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
		versionUploads: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		}
	});
	
	return Statistic;
}