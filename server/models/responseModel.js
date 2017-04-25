const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

const responseSchema = new Schema({
  response: String
})

responseSchema.plugin(autoIncrement.plugin, 'response');

const Response = mongoose.model('response', responseSchema);

module.exports = {
  Response: Response
}
