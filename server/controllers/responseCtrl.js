const mongoose = require('mongoose');
const Response = require('../models/responseModel').Response;

const responseCtrl = {
  get: (req, res) => {
    Response.find({}, (err, data) => {
      if(err) {
        console.log('GET ERROR: ', err);
        res.status(404);
      } else {
        console.log('GET REQUEST SUCCESSFUL');
        res.status(200).send(data);
      }
    })
  },
  post: (req, res) => {
    let newResponse = new Response(req.body);
    newResponse.save((err) => {
      if(err) {
        console.log('POST ERROR: ', err);
        res.status(404);
      } else {
        console.log('POST REQUEST SUCCESSFUL');
        res.status(201);
        res.json({
          type: req.body.type,
          response: req.body.response
        })
      }
    })
  }
}

module.exports = {
  responseCtrl: responseCtrl
}