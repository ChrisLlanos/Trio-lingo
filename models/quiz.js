const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const Quiz = sequelize.define("Quiz", {
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  choices: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  correctAnswer: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Quiz;
