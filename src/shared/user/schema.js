'use strict';

// load deps
const Joi = require('joi');

const UserValidator = {
  list,
  read,
  create,
  logIn,
  update,
  destroy
};

module.exports = UserValidator;

function list () {
  return {};
}

function read () {
  return {
    params: {
      id: Joi
        .string()
        .alphanum()
        .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i, '_id')
        .required()
    }
  };
}

function create () {
  return {
    payload: {
      email: Joi
        .string()
        .email()
        .required(),
      password: Joi
        .string()
        .trim()
        .required()
    }
  };
}

function logIn () {
  return {
    payload: {
      email: Joi
        .string()
        .email()
        .required(),
      password: Joi
        .string()
        .trim()
        .required()
    }
  };
}

function update () {
  return {
    params: {
      id: Joi
        .string()
        .alphanum()
        .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i, '_id')
        .required()
    },
    payload: {
      email: Joi
        .string()
        .email()
        .optional(),
      password: Joi
        .string()
        .trim()
        .optional()
    }
  };
}

function destroy () {
  return {
    params: {
      id: Joi
        .string()
        .alphanum()
        .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i, '_id')
        .required()
    }
  };
}
