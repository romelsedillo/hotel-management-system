const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const ManagerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

ManagerSchema.pre("save", async function (next) {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(this.password, saltRounds);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const ManagerModel = mongoose.model("manager", ManagerSchema);
module.exports = ManagerModel;
