const express = require('express');
const calendar = express.Router();
const mongoose = require('mongoose');

const asyncMiddleware = require('../asyncMiddleware');
// const errorLogger = require('../loggers/errorLogger').logger;
const infoLogger = require('../loggers/infoLogger').logger;
const taskScheme = require('../schemes/taskScheme');
const Task = mongoose.model('articles_views', taskScheme);

calendar.post('/', asyncMiddleware(async (req, res) => {
  const task = await Task.create({
    user: req.body.user,
    start: req.body.start,
    duration: req.body.duration,
    title: req.body.title,
  });
  infoLogger.info('task created');
  res.send({ task });
}));

calendar.delete('/', asyncMiddleware(async (req, res) => {
  await Task.findOneAndRemove({ start: req.body.start, user: req.body.user, });
  infoLogger.info('task deleted');
  res.send({});
}));

module.exports = calendar;