import express from 'express';
import axios from 'axios';


const router = express.Router();


router.get('/register', (req, res) => {
    res.send('Hello World from register page');
});

export default router;

