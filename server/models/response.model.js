const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

const practiceSchema = new Schema({
  response: String
})

practiceSchema.plugin(autoIncrement.plugin, 'response');

const Practice = mongoose.model('response', practiceSchema);

module.exports = {
  Practice: Practice
}
