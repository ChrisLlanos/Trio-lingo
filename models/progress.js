const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const Progress = sequelize.define("Progress", {
  completedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  correctAnswersCount: {
    type: DataTypes.INTERGER,
    defaultValue: 0,
    allowNull: false,
  },
});

module.exports = Progress;
