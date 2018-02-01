require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Restaurant = require("./restaurant");
const Student = require("./student");

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(db => {
    console.log("Connected to Database");
  })
  .catch(console.log);

app.get("/", (req, res) => {
  Restaurant.find({ "address.zipcode": "10014" }, "address.zipcode name")
    .limit(10)
    .sort("-name")
    .then(response => res.json(response));
});

app.post("/students", (req, res) => {
  //Add Student
});

app.listen(3000, () => console.log("Serving on port 3000"));
