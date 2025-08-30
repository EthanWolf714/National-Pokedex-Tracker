require("dotenv").config();
const express = require("express")
const session = require("express-session")
const passport = require("passport");
const mongoose = require("mongoose");

//used to grant access to port 3000 for api
const cors = require("cors");
const authRoutes = require("./routes/authRoutes")
const pokemonRoutes = require("./routes/pokedex.js")
require("./config/passportConfig")(passport)




const app = express()
app.use(cors({ origin: "http://localhost:3000", credentials: true }));


//middle ware
app.use(express.json());
//sessions
app.use(session({
    secret:process.env.SESSION_SECRET || "someSecretkey",
    resave: false,
    saveUninitialized: false
}))
//passport middleware
app.use(passport.initialize());
app.use(passport.session());
//routes
app.use("/auth", authRoutes);
app.use("/api", pokemonRoutes);


//connect to atlas
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));




//starts server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(5000,() => {console.log("Server started on port 5000") })
