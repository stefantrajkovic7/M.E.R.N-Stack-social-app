const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

const app = express();

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello'));

module.exports = app;