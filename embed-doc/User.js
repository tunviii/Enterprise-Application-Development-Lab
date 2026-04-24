const mongoose = require("mongoose");
const { Schema, model } = mongoose;


// Subdocument Schema (Address)
const addressSchema = new Schema({
  street: String,
  city: String,
  country: String,
});


// Main Schema (User)
const userSchema = new Schema({
  name: String,
  email: String,
  addresses: [addressSchema]   // Embedded subdocuments
});


// Model
const User = model("User1", userSchema);


module.exports = User;