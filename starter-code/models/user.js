/*jshint esversion: 6*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  name: String,
  password: String,
  role: {
    type: String,
    enum: ['Boss', 'Developer', 'TA'],
    default: 'Developer'
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
