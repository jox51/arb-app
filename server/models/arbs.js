//import mongoose
const mongoose = require("mongoose")

// define schema which will then be used to interact with db
const arbsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Appt Title Must Be Provided"]
  },
  startDate: {
    type: Date,
    required: [true, "Start date must be provided"]
  },
  endDate: {
    type: Date,
    required: [true, "End date must be provided"]
  },
  location: {
    type: String,
    required: [true, "End date must be provided"]
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

// export schema, name in string will be used to access the object
module.exports = mongoose.model("Arbs", arbsSchema)
