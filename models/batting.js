module.exports = function(sequelize, DataTypes) {
  var Battings = sequelize.define("Battings", {
    playerID: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    yearID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stint: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    teamID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lgID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    G: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AB: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    R: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    H: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    "2B": {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    "3B": {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RBI: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SB: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BB: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IBB: {
      type: DataTypes.STRING,
      allowNull: true
    },
    HBP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SH: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SF: {
      type: DataTypes.STRING,
      allowNull: true
    },
    GIDP: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Battings;
};
