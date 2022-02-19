const sequelize = require("../config/connection");
const { Category, Entry, Habit, User } = require("../models");

const categoryData = require("./categoryData.json");
const habitData = require("./habitData.json");
const entryData = require("./entryData.json");
const userData = require("./userData.json");

const seeds = async () => {
  await sequelize.sync({ force: true });

  await Category.bulkCreate(categoryData, { returning: true });
  console.log("Categories seeded");

  await Habit.bulkCreate(habitData, { returning: true });
  console.log("Habits seeded");

  await User.bulkCreate(userData, { returning: true });
  console.log("Users seeded");

  await Entry.bulkCreate(entryData, { returning: true });
  console.log("Entries seeded");

  process.exit(0);
};

seeds();
