module.exports = function(sequelize, DataTypes) {
  var Pitchings = sequelize.define("Pitchings", {
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
    W: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    L: {
      type: DataTypes.STRING,
      allowNull: true
    },
    G: {
      type: DataTypes.STRING,
      allowNull: true
    },
    GS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CG: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SHO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SV: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IPouts: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    H: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ER: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HR: {
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
    BAOpp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ERA: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    IBB: {
      type: DataTypes.STRING,
      allowNull: true
    },
    WP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    HBP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    BK: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BFP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    GF: {
      type: DataTypes.STRING,
      allowNull: true
    },
    R: {
      type: DataTypes.INTEGER,
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
  return Pitchings;
};
