import express from 'express';
import axios from 'axios';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import cors from 'cors';
import User from './User.js';

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

    console.log(req.body.email);


    try {
        const email = req.body.email;
        const password = req.body.password;
        const userEmail = await User.findOne({ email: email });
        // 1- Check Email 
        if (userEmail) {
            const userPassword = await User.findOne({ password: password });
                    // 1- Check password 

            if (userPassword) {
                res.send({...userEmail, success: true});
            } else {
                console.log("Password maybe Wrong")
                res.send({success: false});

            }
        } else {
            console.log('User not found');
            // res.send("User not found in DB")
            res.send({success: false})

        }
    } catch (error) {
        console.error('Error finding user:', error);
        res.send({success: false})
    }
});

export default router;