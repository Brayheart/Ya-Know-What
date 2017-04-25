const mongoose = require('mongoose');
const Response = require('../models/responseModel').Response

const responseCtrl = {
  get: (req, res) => {
    Response.find({}, (err, data) => {
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
    let newResponse = new Response(req.body);
    newResponse.save(err => {
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