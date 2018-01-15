'use strict';

const Promise = require('bluebird');

const bcrypt = require('bcryptjs');
const shortid = require('shortid');
const mongoose = require('k7-mongoose').mongoose();

const Schema = new mongoose.Schema({
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  }
});

Schema.pre('save', function (next) {
  return next();
});

Schema.pre('findOneAndUpdate', function () {
  const password = this.getUpdate().$set.password;

  if (!password) {
    return;
  }

  this.findOneAndUpdate({}, {password: password});
});

Schema.methods.validatePassword = function (requestPassword) {
  return requestPassword === this.password;
};

const UserModel = mongoose.model('User', Schema);

module.exports = Promise.promisifyAll(UserModel);
