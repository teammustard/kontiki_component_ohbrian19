const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/index.js');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/kontiki/reviews', (req, res) => {  
  db.getAllData((err, data) => {
    if (err) {
      res.status(500);
    } else {
      res.send(data);
    }
  })
});

app.get('/kontiki/stars/:star', (req, res) => {
  db.getStarData(req.params.star, (err, data) => {
    if (err) {
      res.status(500);
    } else {
      res.send(data);
    }
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

