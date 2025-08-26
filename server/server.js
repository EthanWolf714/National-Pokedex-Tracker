const express = require('express')
const app = express()

const mongoose = require("mongoose");
require("dotenv").config();

//connect to atlas
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));





app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"] })
})



app.listen(5000,() => {console.log("Server started on port 5000") })