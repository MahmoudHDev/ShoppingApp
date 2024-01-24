import express from 'express';
import axios from 'axios';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

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

});

export default router;

