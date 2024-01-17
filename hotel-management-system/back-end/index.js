const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const AdminModel = require("./models/admin");
const GuestModel = require("./models/guest");

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/hotel");

// admin login
app.post("/admin", (req, res) => {
  const { email, password } = req.body;
  AdminModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("incorrect password");
      }
    } else {
      res.json("no record existed");
    }
  });
});

//admin register
app.post("/admin-register", (req, res) => {
  AdminModel.create(req.body)
    .then((admin) => res.json(admin))
    .catch((error) => res.json(error));
});

//manager login
//manager register

//receptionist login
//receptionist register

//guest login
app.post("/guest", (req, res) => {
  const { email, password } = req.body;
  GuestModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("incorrect password");
      }
    } else {
      res.json("no record existed");
    }
  });
});

//guest register
app.post("/register", (req, res) => {
  GuestModel.create(req.body)
    .then((guest) => res.json(guest))
    .catch((error) => res.json(error));
});

app.listen(3001, () => {
  console.log("server is running");
});
