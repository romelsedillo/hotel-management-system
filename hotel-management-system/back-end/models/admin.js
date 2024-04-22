const mongoose = require('mongoose');
const bcrypt = require("bcrypt");


const AdminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

AdminSchema.pre("save", async function (next) {
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(this.password, saltRounds);
      this.password = hashedPassword;
      next();
    } catch (error) {
      next(error);
    }
  });

const AdminModel = mongoose.model("admin", AdminSchema)
module.exports = AdminModel