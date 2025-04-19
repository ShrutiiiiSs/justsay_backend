const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  rating: Number,
  ingredients: [String],
  calories: Number,
  isVeg: Boolean,
});

module.exports = mongoose.model('Food', FoodSchema);
