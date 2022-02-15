const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Entry extends Model {}

Entry.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    timestamp: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    // cat_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'category',
    //     key: 'id',
    //   }
    // },
    habit_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'habit',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'entry',
  }
);

module.exports = Entry;
