const mongoose = require('mongoose');

const ManagerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const ManagerModel = mongoose.model("manager", AdminSchema)
module.exports = ManagerModel