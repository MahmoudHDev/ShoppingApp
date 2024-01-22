import express from 'express';
import axios from 'axios';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import 'dotenv/config';
import cors from 'cors';
import User from './User.js';

// Properties:-
const router = express.Router();
mongoose.connect('mongodb://127.0.0.1:27017/nileUsers')
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const saltRounds = 10;


// Methods:-
router.use(cors());
router.use(bodyParser.json());


router.post('/register', (req, res) => {
    const userPassword = req.body.password;

    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(userPassword, saltRounds, function (err, hash) {
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hash,
                gender: req.body.gender,
                birthday: req.body.birthday,
                fName: req.body.fName,
                lName: req.body.lName
            });

            newUser.save()

                .then(() => {
                    res.send({ success: true })
                    console.log('console saved');
                })
                .catch((error) => {
                    res.send({ success: false });
                    console.log('Error saved');
                });
        });
    });

});

export default router;

