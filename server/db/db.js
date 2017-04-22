const mongoose = require('mongoose');
const uri = 'mongodb://user:user@ds031193.mlab.com:31193/yaknowwhat';
const autoIncrement = require('mongoose-auto-increment');

const db = mongoose.connect(uri, (err) => {
  if(err) {
    console.log('Error with db: ', err);
  } else {
    console.log('Connection to db successful');
  }
})

autoIncrement.initialize(db);

module.exports = db;