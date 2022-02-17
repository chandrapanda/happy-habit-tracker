const sequelize = require ("../config/connection");
const {Category, Entry, Habit } = require ("../models");

const categoryData = require ("./categoryData.json");
const habitData = require('./habitData.json');
const entryData = require('./entryData.json');
const userData = require('./userData.json');

const seeds = async () => {
    await sequelize.sync ({ force:true});

   const newCats = await Category.bulkCreate(categoryData, {returning:true})
   console.log(NewCats);

   const newHabits = await Habit.bulkCreate(habitData, {returning: true})
   console.log('Habits Seeded');

   const newEntry = await Entry.bulkCreate(entryData, {returning: true});
   console.log('Entries Seeded');

   const newUserData = await Entry.bulkCreate(userData, {returning: true});
   console.log('user Seeded');
   
   process.exit();
}

seeds();