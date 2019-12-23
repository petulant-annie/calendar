const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskScheme = new Schema({
  task: String,
  time: Number,
}, {
  collection: 'tasks',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

module.exports = taskScheme;