const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");

const AdminModel = require("./models/admin");
const ManagerModel = require("./models/manager");
const GuestModel = require("./models/guest");

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/hotel");

// ------------- ADMIN LOGIN ---------------
app.post("/admin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AdminModel.findOne({ email: email });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        res.json("Success");
      } else {
        res.json("Incorrect password");
      }
    } else {
      res.json("No record existed");
    }
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
});
// ------------- ADMIN LOGIN ---------------

// ------------- ADMIN REGISTER--------------
app.post("/admin-register", (req, res) => {
  AdminModel.create(req.body)
    .then((admin) => res.json(admin))
    .catch((error) => res.json(error));
});
// ------------- ADMIN REGISTER--------------

//    ---------------- MANAGER LOGIN ---------------
app.post("/manager", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await ManagerModel.findOne({ email: email });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        res.json("Success");
      } else {
        res.json("Incorrect password");
      }
    } else {
      res.json("No record existed");
    }
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
});

//    ---------------- MANAGER LOGIN ---------------

//     --------- MANAGER REGISTER ------------
app.post("/manager-register", (req, res) => {
  ManagerModel.create(req.body)
    .then((manager) => res.json(manager))
    .catch((error) => res.json(error));
});
//     ---------MANAGER REGISTER------------

//receptionist login
//receptionist register

//   --------------GUEST LOGIN-----------------
app.post("/guest", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await GuestModel.findOne({ email: email });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        res.json("Success");
      } else {
        res.json("Incorrect password");
      }
    } else {
      res.json("No record existed");
    }
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
});

//guest register
app.post("/register", (req, res) => {
  GuestModel.create(req.body)
    .then((guest) => res.json("Success"))
    .catch((error) => res.json(error));
});

app.listen(3001, () => {
  console.log("server is running");
});
