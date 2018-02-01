require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { json } = require("body-parser");
const Restaurant = require("./restaurant");
const Student = require("./student");

app.use(json());

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

app.get("/students", (req, res) => {
  Student.find().then(result => res.json(result));
});
app.post("/students", (req, res) => {
  const student = new Student(req.body);
  student.save();
  Student.find().then(result => res.json(result));
});

app.listen(3000, () => console.log("Serving on port 3000"));
