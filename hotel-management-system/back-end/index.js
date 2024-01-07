const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const AdminModel = require("./models/admin");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/register");

app.post("/register", (req, res) => {
  AdminModel.create(req.body)
    .then((admin) => res.jsaon(admin))
    .catch((error) => res.jsaon(error));
});

app.listen(3001, () => {
  console.log("server is running");
});
