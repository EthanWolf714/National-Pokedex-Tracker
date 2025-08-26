require("dotnev").config();
const express = require("express")
const session = require("express-session")
const passport = require("passport");
//const LocalStrategy = require("passport-local")
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes")

require("./config/passportConfig")(passport)



const app = express()


//middle ware

//sessions

//passport middleware

//routes



//connect to atlas
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));





const PORT = process.env.PORT || 5000;
app.listen(5000,() => {console.log("Server started on port 5000") })