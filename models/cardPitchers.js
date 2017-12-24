module.exports = function(sequelize, DataTypes) {
  var Pitchers = sequelize.define("Pitchers", {
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
    control: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IP: {
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
    outPU: {
      type: DataTypes.STRING,
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
    homer: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pic: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Pitchers;
};
