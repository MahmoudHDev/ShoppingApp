import express from 'express';
import axios from 'axios';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';


// Properties:-
const router = express.Router();
mongoose.connect('mongodb://127.0.0.1:27017/nileUsers');




// Methods:-
router.get('/login',(req,res)=> { 
    res.send("Send login info")
})

router.post('/login', (req,res) => { 

});

export default router;