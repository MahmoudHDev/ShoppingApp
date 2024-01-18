import express from 'express';
import register from './register.js';
import home from './home.js';
import cors from 'cors';
import mongoose from 'mongoose';
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import axios from 'axios';
import bodyParser from 'body-parser';


// Properties:-
const app = express();
const port = 9000;
const fakeStoreAPI = "https://fakestoreapi.com/products";
var urlencodedParser = bodyParser.urlencoded({ extended: false });
mongoose.connect('mongodb://127.0.0.1:27017/nileUsers')

const User = mongoose.model('User', {
    email: String,
    password: String,
    fName: String,
    lName: String,
    birthday: String,
    gender: String
});



// Methods:-
app.use(cors());
app.use(home);
app.use(bodyParser.json());

app.get('/register', (req, res) => {

    console.log("Hello Get Request")
})


app.post('/register', (req, res) => {
    console.log(req.body)
    console.log("Hello Post Request")

    const newUser = new User(req.body);
    newUser.save().then(() => console.log('user Has been saved'));
})


app.listen(port, () => {
    console.log("App Started listening " + port);
});
