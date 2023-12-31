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
      defaultValue: 0,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Progress",
  }
);

module.exports = Progress;
