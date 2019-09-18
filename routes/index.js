'use strict';

const { Router } = require('express');
const router = Router();

const Publication = require('./../models/publication');

router.get('/', (req, res, next) => {
  Publication.find()
    .limit(20)
    .populate('user')
    .then(publications => {
      console.log(publications);
      res.render('index', { publications });
    })
    .catch(error => next(error));
});

module.exports = router;
