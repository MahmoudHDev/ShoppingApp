
import express from 'express';
import cors from 'cors';
import axios from 'axios';

import home from './home.js';
import register from './register.js';
import login from './login.js';


// Properties:-
const app = express();
const port = 9000;




// Methods:-

app.use(cors());
// Components
app.use(home);
app.use(register);
app.use(login);

app.listen(port, () => {
    console.log("App Started listening " + port);
});
