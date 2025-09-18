const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  medicalHistory: String,
  allergies: String,
  emergencyContact: String,
});

module.exports = mongoose.model("User", userSchema);
