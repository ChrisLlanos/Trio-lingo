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
    timestamps: true,
    modelName: "progress",
  }
);

Progress.belongsTo(sequelize.models.User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = Progress;
