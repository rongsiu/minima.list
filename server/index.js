const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors');
const dbHelper = require('../database/dbHelper.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/items', function (req, res) {
  dbHelper.getItems({}, function (err, respond) {
    if (err) return err;
    res.send(respond);
  });
});


app.get('/api/categories', function (req, res) {
  dbHelper.getCategories('category', function (err, respond) {
    if (err) return err;
    res.send(respond);
  });
});

app.get('/api/activities', function (req, res) {
  dbHelper.getCategories('activities', function (err, respond) {
    if (err) return err;
    res.send(respond);
  });
});

module.exports = app