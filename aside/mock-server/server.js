require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = require('./routes/main');

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', router);

mongoose.connect(`${process.env.MONGO_DB}`,
  { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) { return errorLogger.error(err, err.message); }
    server.listen(PORT, () => infoLogger.info(`Server started on port ${PORT}`));
  });