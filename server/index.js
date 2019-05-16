const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/index.js');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/items', (req, res) => {  // /:id of tours
  db.getAllData((err, data) => {
    if (err) {
      res.status(500);
    } else {
      res.send(data)
    }
  })
});

app.get('/api/items')

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

