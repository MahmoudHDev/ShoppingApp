import express from 'express';
import axios from 'axios';

const router = express.Router();
const fakeStoreAPI = "https://fakestoreapi.com/products";

router.get('/', async (req,res) => { 
    const apiResponse = await axios.get(fakeStoreAPI);
    const data = apiResponse.data
    res.send(data);
});


export default router;