const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/index.js");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "/../client/dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/tours/review/:tourId", (req, res) => {
  db.getAllData(req.params.tourId, (err, data) => {
    if (err) {
      res.status(500);
    } else {
      res.send(data);
    }
  });
});

app.get("/tours/stars/:tourId/:star", (req, res) => {
  db.getStarData([req.params.tourId, req.params.star], (err, data) => {
    if (err) {
      res.status(500);
    } else {
      res.send(data);
    }
  });
});

app.get("/tours/title/:tourId", (req, res) => {
  db.getTitle(req.params.tourId, (err, data) => {
    if (err) {
      res.status(500);
    } else {
      res.send(data);
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../client/dist/index.html"));
});

app.listen(PORT, () => {
  if (PORT === 3001) {
    console.log("Listening on port 3001");
  } else {
    console.log("Listening on port " + PORT);
  }
});
