import express from 'express';
import cors from 'cors';
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import https from 'https';
import axios from 'axios';

// Properties:-
const app = express();
const port = 9000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const fakeStoreAPI = "https://fakestoreapi.com/products";

// Methods:-
app.use(cors());
app.get('/', async (req, res) => {
    const apiResponse = await axios.get(fakeStoreAPI);
    const data = apiResponse.data
    res.send(data);

});

app.listen(port, () => {
    console.log("App Started listening");
});
