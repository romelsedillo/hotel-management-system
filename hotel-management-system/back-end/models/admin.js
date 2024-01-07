const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    data
})

const AdminModel = mongoose.model("admin", AdminSchema)
module.exports = AdminModel