module.exports = function(sequelize, DataTypes) {
  var Fieldings = sequelize.define("Fieldings", {
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
    GS: {
      type: DataTypes.STRING,
      allowNull: true
    },
    InnOuts: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    A: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    E: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PB: {
      type: DataTypes.STRING,
      allowNull: true
    },
    WP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SB: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CS: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ZR: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Fieldings;
};
