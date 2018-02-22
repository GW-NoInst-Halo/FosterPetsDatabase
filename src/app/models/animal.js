const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create animal Schema and model

const AnimalSchema = new Schema({
  name: String,
  breed: String,
  about: String,
  fixed: Boolean,
  age: Number
});

const Animal = mongoose.model('animal', AnimalSchema);

module.exports = Animal;