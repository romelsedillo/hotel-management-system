const mongoose = require('mongoose');

const GuestSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    gender: String,
    email: String,
    password: String
})

const GuestModel = mongoose.model("guest", GuestSchema)
module.exports = GuestModel