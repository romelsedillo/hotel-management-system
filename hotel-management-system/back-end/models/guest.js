// const mongoose = require('mongoose');

// const GuestSchema = new mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     age: Number,
//     gender: String,
//     email: String,
//     password: String
// })

// const GuestModel = mongoose.model("guest", GuestSchema)
// module.exports = GuestModel

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const GuestSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /^\S+@\S+\.\S+$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

// Hash password before saving to the database
GuestSchema.pre("save", async function (next) {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(this.password, saltRounds);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const GuestModel = mongoose.model("guest", GuestSchema);

module.exports = GuestModel;
