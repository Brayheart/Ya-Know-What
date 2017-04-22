const express = require('express');
const path = require('path');
const db = require('./server/db/db');
const router = require('./router');
const parser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(parser.json());
app.use(parser.urlencoded({
  extended: true
}))

app.use(express.static(path.join(__dirname, 'client')));

app.use('/', router);

app.listen(PORT, (err) => {
  if(err) {
    console.log('Error with the server: ', err);
  } else {
    console.log('Connection to server successful');
  }
})