const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Progress extends Model {}

Progress.init(
  {
    completedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    correctAnswersCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    modelName: "progress",
  }
);

module.exports = Progress;
