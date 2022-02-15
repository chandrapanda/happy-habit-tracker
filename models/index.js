// import models
const Category = require("./Category");
const Habit = require("./Habit");
const Entry = require("./Entry");
const User = require("./User");

// A Habit belongsTo a Category
Habit.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Habits
Category.hasMany(Habit, {
  // foreignKey: "id",
});

// A Habit has many Entries
Habit.hasMany(Entry);

// An Entry belongs to one Category
Entry.belongsTo(Habit, {
  foreignKey: "habit_id",
});

// A User has many Entries
User.hasMany(Entry, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// An Entry belongs to a User
Entry.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = {
  Category,
  Habit,
  Entry,
  User,
};
