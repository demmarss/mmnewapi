const express = require('express');
const mongoose = require('mongoose');
const users = require('./src/routes/user');
const solarTimes = require('./src/routes/solahTime')
const app = express();
const port = 3000;
var cors = require('cors');
const fs = require('fs');

// app.use(express.urlencoded())

app.use(cors())

mongoose.connect('mongodb://localhost/mficc',  { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: false,
 })

 app.use(express.json()) 
    app.use (express.urlencoded({extended: false}))

app.use('/users', users);

app.use('/solarTimes', solarTimes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))