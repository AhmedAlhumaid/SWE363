const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
});

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;
