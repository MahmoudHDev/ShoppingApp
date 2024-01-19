import express from 'express';
import axios from 'axios';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import 'dotenv/config';

// Properties:-
const router = express.Router();
mongoose.connect('mongodb://127.0.0.1:27017/nileUsers')
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const { Schema } = mongoose;



const UserSchema = new Schema( {
    email: String,
    password: String,
    fName: String,
    lName: String,
    birthday: String,
    gender: String
});

// UserSchema.plugin(bcrypt)
const User = mongoose.model('User', UserSchema );


// Methods:-

router.use(bodyParser.json());


router.get('/register', (req, res) => {
    res.send('Hello World from register page');
    console.log("Hello World")
});


router.post('/register', (req, res) => {
    console.log(req.body)
    console.log("Hello Post Request")

    const newUser = new User(req.body);
    newUser.save().then(() => console.log('user Has been saved'));
})

export default router;

