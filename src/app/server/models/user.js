const mongo = require('mongoose');
const Schema = mongo.Schema;

const userSchema = new Schema({
  name: {type: String},
  address: {type: String}
}, {versionKey: false});

const User = mongo.model('User', userSchema, 'user');
module.exports = User;
