'use strict';

const { Router } = require('express');
const router = Router();

const Publication = require('./../models/publication');

router.get('/create', (req, res, next) => {
  res.render('publication/create');
});

router.post('/create', (req, res, next) => {
  const user = req.session.user;
  if (!user) return next(new Error('REQUIRES_AUTHENTICATION'));
  const body = req.body.body;
  Publication.create({
    body,
    user: user._id
  })
    .then(publication => {
      res.redirect(`/publication/${ publication._id }`);
    })
    .catch(error => next(error));
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Publication.findById(id)
    .populate('user')
    .then(publication => {
      res.render('publication/display', { publication });
    })
    .catch(error => next(error));
});

router.get('/:id/edit', (req, res, next) => {
  const id = req.params.id;
  // Loading publication ...
  const publication = {};
  res.render('publication/edit', { publication });
});

router.post('/:id/edit', (req, res, next) => {
  const id = req.params.id;
  // Loading publication ...
  const publication = {};
  res.redirect(`/publication/${ id }`);
});

module.exports = router;
