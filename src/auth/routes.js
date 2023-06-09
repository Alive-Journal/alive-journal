'use strict';

const express = require('express');
const authRouter = express.Router();

const { readers } = require('./models');
const basicAuth = require('./middleware/basics')
const bearerAuth = require('./middleware/bearer')
const permissions = require('./middleware/acl')

authRouter.post('/signup', async (req, res, next) => {
  try {
    let userRecord = await readers.create(req.body);
    console.log('testing user record function', userRecord);
    const output = {
      user: userRecord,
      token: userRecord.token
    };
    res.status(201).json(output);
  } catch (e) {
    next(e.message)
  }
});

authRouter.post('/signin', basicAuth, (req, res, next) => {
  const user = {
    user: req.user,
    token: req.user.token
  };
  res.status(200).json(user);
});

authRouter.get('/readers', bearerAuth, permissions('delete'), async (req, res, next) => {
  const userRecords = await readers.findAll({});
  const list = userRecords.map(user => user.username);
  res.status(200).json(list);
});

authRouter.get('/secret', bearerAuth, async (req, res, next) => {
  res.status(200).send('Welcome to Bloggers Paradise!')
});

module.exports = authRouter;
