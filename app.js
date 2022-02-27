// Main app
// Author: Timothy Vezzani
// All rights reserved

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const userRoutes = require('./routes/user');
const visitorRoutes = require('./routes/visitor');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded());

app.use('/user', userRoutes);
app.use('/visitor', visitorRoutes);

app.use((req, res, next) => {
    res.render('404');
});

app.listen(port);

