const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

const responseSchema = new Schema({
  type: String,
  response: String
})

responseSchema.plugin(autoIncrement.plugin, 'Response');

const Response = mongoose.model('Response', responseSchema);

module.exports = {
  Response: Response
}