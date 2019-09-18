'use strict';

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const schema = new mongoose.Schema({
  body: {
    type: String,
    trim: true,
    required: true
  },
  user: {
    type: ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Publication', schema);
