module.exports = function(sequelize, DataTypes) {
  var Players = sequelize.define("Players", {
    playerID: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    playerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    onBase: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fielding: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    outGB: {
      type: DataTypes.STRING,
      allowNull: false
    },
    outFB: {
      type: DataTypes.STRING,
      allowNull: false
    },
    outSO: {
      type: DataTypes.STRING,
      allowNull: false
    },
    walk: {
      type: DataTypes.STRING,
      allowNull: false
    },
    single: {
      type: DataTypes.STRING,
      allowNull: false
    },
    double: {
      type: DataTypes.STRING,
      allowNull: false
    },
    triple: {
      type: DataTypes.STRING,
      allowNull: false
    },
    homer: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Players;
};
