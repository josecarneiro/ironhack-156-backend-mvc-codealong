'use strict';

const { Router } = require('express');
const router = Router();

const User = require('./../models/user');

router.get('/sign-up', (req, res, next) => {
  res.render('authentication/sign-up');
});

router.post('/sign-up', (req, res, next) => {
  const { email, password, username } = req.body;
  User.signUp({
    email,
    username,
    password
  })
    .then(user => {
      req.session.user = { _id: user._id };
      res.redirect('/');
    })
    .catch(error => next(error));
});

router.get('/sign-in', (req, res, next) => {
  res.render('authentication/sign-in');
});

router.post('/sign-in', (req, res, next) => {
  const { email, password } = req.body;
  User.signIn({
    email,
    password
  })
    .then(user => {
      req.session.user = { _id: user._id };
      res.redirect('/');
    })
    .catch(error => next(error));
});

router.post('/sign-out', (req, res, next) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
