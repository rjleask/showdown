module.exports = function(sequelize, DataTypes) {
  var Masters = sequelize.define("Masters", {
    playerID: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    birthYear: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    birthMonth: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    birthDay: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    birthCountry: {
      type: DataTypes.STRING,
      allowNull: true
    },
    birthState: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    birthCountry: {
      type: DataTypes.STRING,
      allowNull: true
    },
    deathYear: {
      type: DataTypes.STRING,
      allowNull: true
    },
    deathMonth: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deathDay: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deathCountry: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deathState: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deathCity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nameFirst: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nameLast: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nameGiven: {
      type: DataTypes.STRING,
      allowNull: true
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bats: {
      type: DataTypes.STRING,
      allowNull: true
    },
    throws: {
      type: DataTypes.STRING,
      allowNull: true
    },
    debut: {
      type: DataTypes.STRING,
      allowNull: true
    },
    finalGame: {
      type: DataTypes.STRING,
      allowNull: true
    },
    retroID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bbrefID: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Masters;
};
