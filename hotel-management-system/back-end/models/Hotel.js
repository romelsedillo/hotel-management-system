const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const HotelModel = mongoose.model("", HotelSchema);
module.exports = HotelModel;