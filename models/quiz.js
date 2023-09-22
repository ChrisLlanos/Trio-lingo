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
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Quiz.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = Quiz;
