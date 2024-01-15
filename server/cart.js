import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/cart', (req,res) => { 
    res.send("Hello This is from Cart!")
});

export default router;