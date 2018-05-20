const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../client/dist')));

// const port = 3005;

// app.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });

module.exports = app