const mongoose = require('mongoose');
const uri = 'mongodb://user:user@ds031193.mlab.com:31193/yaknowwhat';
const autoIncrement = require('mongoose-auto-increment');

const db = mongoose.connect(uri, err => {
  if(err) {
    console.log('Error with DB: ', err);
  } else {
    console.log('Connection to DB successful!')
  }
})

autoIncrement.initialize(db);

module.exports = db;