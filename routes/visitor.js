const express = require('express');

const Router = express.Router();

Router.get('/about', (req, res, next) => {
    console.log('/about middleware');
    res.send('<p>The Middleware that hadles /about </p>');
});

Router.get('/', (req, res, next) => {
    console.log('/ middleware');
    res.render('index');
});

module.exports = Router;