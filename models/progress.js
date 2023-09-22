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
      defaultValue: 0,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  {
    sequelize,
    modelName: "progress",
    timestamps: false,
  }
);

module.exports = Progress;
