const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Food = require('./models/Food');
const foods = require('./data/foods.json');
const beverages = require('./data/beverages.json');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Food.deleteMany(); // Optional: clears DB
    await Food.insertMany([...foods, ...beverages]); // insert both

    console.log('✅ Data successfully seeded!');
    process.exit();
  } catch (err) {
    console.error('❌ Failed to seed data:', err);
    process.exit(1);
  }
};

importData();
