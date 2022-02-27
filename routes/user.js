const express = require('express');
const path = require('path');
const Router = express.Router();

Router.use('/overview', (req, res, next) => {
    console.log('/overview middleware');
    res.send('<p>The Middleware that hadles /overview </p>');
});

Router.use('/track', (req, res, next) => {
    console.log('/track middleware');
    res.send('<p>The Middleware that hadles /track </p>');
});

Router.get('/add-goal', (req, res, next) => {
    console.log('/add-goal middleware');
    res.send('<p>The Middleware that hadles /add-goal </p>');
});

Router.get('/edit-goal', (req, res, next) => {
    console.log('/edit-goal middleware');
    res.send('<p>The Middleware that hadles /edit-goal </p>');
});

Router.post('/goal', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

Router.use('/settings', (req, res, next) => {
    console.log('/settings middleware');
    res.send('<p>The Middleware that hadles /settings </p>');
});

module.exports = Router;