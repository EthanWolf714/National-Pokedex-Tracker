const express = require("express");
const passport = require("passport");
//require user model
//require bcrtpy


//set up route from passport website
const router = express.Router();
//signup
router.get('/signup', function(req, res, next){
    res.render('signup');
})

//login


//logout


//module export