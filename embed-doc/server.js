const mongoose = require("mongoose");
const User = require("./User");
require("dotenv").config();

async function run() {
  try {
    // Connect to MongoDB Atlas
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB Atlas");

    // Create User with embedded addresses
    const user = new User({
      name: "Tanvi",
      email: "utanvi@example.com",
      addresses: [
        { street: "123 Main St", city: "New York", country: "USA" },
        { street: "456 Elm St", city: "Boston", country: "USA" }
      ]
    });

    // Save document
    await user.save();
    console.log("User saved successfully!");

    // Fetch all users
    const users = await User.find();
    console.log("All Users:", users);

  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    // Disconnect MongoDB
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

// Run function
run();