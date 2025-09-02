const express = require("express");
const passport = require("passport");
const User = require('../models/User');
const crypto = require('crypto');
//require user model
//require bcrtpy


//set up route from passport website
const router = express.Router();
//signup
router.post('/signup', async (req, res) => {
    try{
        const{ username, password, email, role, progress } = req.body;
        const user = new User({username, password, email, role, progress});
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });

    }catch(err){
        res.status(500).json({error:'Registration failed'});
    }
});

//login
router.post('/login', async (req, res, next) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email})
        
        if(!user){
            return res.status(400).json({error: 'User not found'});
        }
        const isMatch = await user.isValidPassword(password);
        if(!isMatch){
            return res.status(400).json({error: 'invalid password'});
        }
        res.json({message: 'Login successful!'});
    }catch(err){
        res.status(500).json({error: 'login failed'})
    }
});

//logout
router.post('/logout', function(req,res,next){
    req.logout(function(err){
        if(err){
            return next(err);
        }
        res.redirect('/')
    });
});

//module export
module.exports = router;