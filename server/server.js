const express = require('express');
const path = require('path');
const PORT = 3000;
const db = require('./db/db');

const app = express();

app.use(express.static(path.join(__dirname, 'client')));

app.listen(PORT, err => {
  if(err) {
    console.log('Error with Server');
  } else {
    console.log('Connection to Server successful! Listening on Port ', PORT);
  }
})