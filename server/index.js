
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import axios from 'axios';
import home from './home.js';
import register from './register.js';
import login from './login.js';
import passport from 'passport';
import 'dotenv/config';

// Properties:-
const app = express();
const port = 9000;

// Methods:-
app.use(cors());

// Components
app.use(home);
app.use(session({
    secret: 'What ever secret you want to add save it to the the env file',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }  }));

app.use(register);
app.use(login);

app.use(passport.initialize());
app.use(session());


app.listen(port, () => {
    console.log("App Started listening " + port);
});
