const mongoose = require('mongoose');
const Practice = require('../models/responseModel').Practice

const responseCtrl = {
  get: (req, res) => {
    Practice.find({}, (err, data) => {
      if(err) {
        console.log('Error with GET Request');
        res.status(404);
      } else {
        console.log('GET Request successful!');
        res.status(200).send(data);
      }
    })
  },
  post: (req, res) => {
    let newPractice = new Practice(req.body);
    newPractice.save(err => {
      if(err) {
        console.log('Error with POST Request');
        res.status(404);
      } else {
        console.log('POST Request successful!');
        res.status(201);
        res.json({
          response: req.body.response
        })
      }
    })
  }
}

module.exports = {
  responseCtrl: responseCtrl
}