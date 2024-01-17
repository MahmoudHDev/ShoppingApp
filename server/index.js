import express from 'express';
import register from './register.js';
import home from './home.js';
import cors from 'cors';
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


// Methods:-
app.use(cors());
app.use(home);
// app.use(register);

app.get('/register', (req,res)=>{
    console.log("Hello Get Request")
})


app.post('/register', (req,res)=> { 
    console.log(req.body)
    console.log("Hello Post Request")

})




app.listen(port, () => {
    console.log("App Started listening " + port) ;
});
