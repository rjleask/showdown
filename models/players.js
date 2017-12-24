module.exports = function(sequelize, DataTypes) {
  var Players = sequelize.define("Players", {
    playerID: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    playerName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    team: {
      type: DataTypes.STRING,
      allowNull: true
    },
    onBase: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    position: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fielding: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    outGB: {
      type: DataTypes.STRING,
      allowNull: true
    },
    outFB: {
      type: DataTypes.STRING,
      allowNull: true
    },
    outSO: {
      type: DataTypes.STRING,
      allowNull: true
    },
    walk: {
      type: DataTypes.STRING,
      allowNull: true
    },
    single: {
      type: DataTypes.STRING,
      allowNull: true
    },
    double: {
      type: DataTypes.STRING,
      allowNull: true
    },
    triple: {
      type: DataTypes.STRING,
      allowNull: true
    },
    homer: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pic: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Players;
};
