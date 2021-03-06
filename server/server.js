const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const db = require('./db/db');

const router = require('./router');
const parser = require('body-parser');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({
  extended: true
}))

app.use(express.static(path.join(__dirname, '../client')));

app.use('/', router);

app.listen(PORT, err => {
  if(err) {
    console.log('Error with Server');
  } else {
    console.log('Connection to Server successful! Listening on Port ', PORT);
  }
})