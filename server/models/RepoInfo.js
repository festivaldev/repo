module.exports = (Sequelize, DataTypes) => {
	const RepoInfo = Sequelize.define("repoInfo", {
		"Origin": {
			type: DataTypes.STRING,
			primaryKey: true
		},
		"Label": {
			type: DataTypes.STRING
		},
		"Suite": {
			type: DataTypes.STRING
		},
		"Version": {
			type: DataTypes.STRING
		},
		"Codename": {
			type: DataTypes.STRING
		},
		"Architecture": {
			type: DataTypes.STRING
		},
		"Components": {
			type: DataTypes.STRING
		},
		"Description": {
			type: DataTypes.TEXT
		}
	}, {
		timestamps: false,
		tableName: "repoInfo"
	});
	
	return RepoInfo;
}