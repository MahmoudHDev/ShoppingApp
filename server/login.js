import express from 'express';
import axios from 'axios';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import cors from 'cors';
import User from './User.js';
import passport from 'passport';

// Properties:-
const router = express.Router();
mongoose.connect('mongodb://127.0.0.1:27017/nileUsers');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Methods:-
router.use(cors());
router.use(bodyParser.json());

router.get("/login", (req, res) => {
    res.send("Login Page get request")
})

router.post('/login', async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    
    const user = new User({
        username: email,
        password: password
    });


});

export default router;