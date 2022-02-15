// import models
const Category = require("./Category");
const Habit = require("./Habit");
const Entry = require("./Entry");

// A Habit belongsTo a Category
Habit.belongsTo(Category, {
  foreignKey: "cat_id",
});

// Categories have many Habits
Category.hasMany(Habit, {
  // foreignKey: "id",
});

Habit.hasMany(Entry);

Entry.belongsTo(Habit, {
  foreignKey: "habit_id",
});

module.exports = {
  Category,
  Habit,
  Entry,
};
