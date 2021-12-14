const express = require('express');
const mongoose = require('mongoose');
// const db = require('./config/keys').mongoURI;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
// const cors = require('cors');

const app = express();

// const UI_API_URL = 'http://localhost:3000/';

// Express Configuration
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
// const options = {
//     allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization", "X-Access-Token", "application/x-www-form-urlencoded", "charset=UTF-8", "application/json", "text/plain", "Access-Control-Allow-Headers"],
//     credentials: true,
//     methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
//     origin: UI_API_URL,
//     preflightContinue: false
// };
// app.use(cors(options));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    next();
});

// Middlewares/Services
app.use(passport.initialize());
require('./services/passport')(passport);

// API Routes
require('./routes')(app);

// Connect to MongoDB
mongoose
    .connect('mongodb+srv://stefan:admin@cluster0.insy4.mongodb.net/myFirstDatabase?retryWrites=false&w=majority')
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

module.exports = app;