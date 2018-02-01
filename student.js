const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: String,
  email: String
});
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
