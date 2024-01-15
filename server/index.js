import express from 'express';
import register from './register.js';
import home from './home.js';
import cors from 'cors';
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import axios from 'axios';


// Properties:-
const app = express();
const port = 9000;
const fakeStoreAPI = "https://fakestoreapi.com/products";

// Methods:-
app.use(cors());
app.use(home);
app.use(register);



app.listen(port, () => {
    console.log("App Started listening");
});
