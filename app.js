const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// Express Configuration
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API Routes
require('./routes')(app);

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

module.exports = app;