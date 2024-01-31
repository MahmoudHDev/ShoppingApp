import express from 'express';
import axios from 'axios';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import User from './User.js'
import passport from 'passport';

// Properties:-
const router = express.Router();

var urlencodedParser = bodyParser.urlencoded({ extended: false });
mongoose.connect('mongodb://127.0.0.1:27017/nileUsers')

// Methods:-
router.use(cors());
router.use(bodyParser.json());


router.post('/register', (req, res) => {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const userGender = req.body.gender;
    const dob = req.body.birthday;
    
    User.register({
        username: userEmail,
        fName: firstName,
        lName: lastName,
        birthday: dob,
        gender: userGender
    }, userPassword, (err, user) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {

            passport.authenticate("local")(req, res, () => {
                console.log("Redirect to the home or profile page")
                res.redirect('/');
            })
        }
    });
});

export default router;


