const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const Quiz = sequelize.define("Quiz", {
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  choices: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  correctAnswer: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  language: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quizId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
}, 
{sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: "Quiz",}
);

module.exports = Quiz;
