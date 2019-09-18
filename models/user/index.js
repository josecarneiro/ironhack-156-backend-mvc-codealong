'use strict';

const mongoose = require('mongoose');

const signInStatic = require('./statics/sign-in');
const signUpStatic = require('./statics/sign-up');
const findByEmailStatic = require('./statics/find-by-email');

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  }
});

schema.statics.signIn = signInStatic;
schema.statics.signUp = signUpStatic;
schema.statics.findByEmail = findByEmailStatic;

module.exports = mongoose.model('User', schema);
