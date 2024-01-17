import express from 'express';
import axios from 'axios';

// Properties
const router = express.Router();

// Methods
router.get('/register', (req, res) => {
    res.send('Hello World from register page');
    console.log("Hello World")
});


router.post('/register', (req, res) => {
    console.log(res.body)
    res.send('welcome, ' + req.body.username)
})

export default router;

