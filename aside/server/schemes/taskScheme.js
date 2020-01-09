const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskScheme = new Schema({
  user: String,
  start: String,
  duration: Number,
  title: String,
}, {
  collection: 'tasks',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

module.exports = taskScheme;