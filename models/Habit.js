const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Habit extends Model {}

Habit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    habit_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cat_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'habit',
  }
);

module.exports = Habit;