require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorLogger = require('./loggers/errorLogger').logger;
const infoLogger = require('./loggers/infoLogger').logger;
const calendar = require('./routes/calendar');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/', calendar);
app.use((err, req, res) => {
  errorLogger.error(err, err.message);
  res.status(500).send(err);
});

mongoose.connect(`${process.env.MONGO_DB}`,
  { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) { return errorLogger.error(err, err.message); }
    app.listen(PORT, () => infoLogger.info(`Server started on port ${PORT}`));
  }
);