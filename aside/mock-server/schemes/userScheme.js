const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userScheme = new Schema ({
  user: String,
  password: String,
}, {
  collection: 'users',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

module.exports = userScheme;
