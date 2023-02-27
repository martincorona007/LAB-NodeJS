const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
try {
  const db = mongoose.connect("mongodb://localhost:27017/calis");
  console.log('database is connected to ',db)  
} catch (error) {
  console.log("eros ",error)
} 


