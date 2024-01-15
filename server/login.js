import express from 'express';
import axios from 'axios';


const router = express.Router();


router.get('login',(req,res)=> { 
    res.send("Send login info")
})


export default router;