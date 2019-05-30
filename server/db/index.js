const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./server/db/kontiki.db");

const getAllData = (data, callback) => {
  db.all(`SELECT * FROM reviews WHERE tour_id=(?)`, [data], (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const getStarData = (data, callback) => {
  db.all(`SELECT * FROM reviews WHERE tour_id=(?) and star_rating=(?)`, data, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    }
  );
};

const getTitle = (data, callback) => {
  db.all(`SELECT tour_title FROM tours WHERE id=(?)`, [data], (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data[0]);
    }
  });
};

module.exports = {
  getAllData,
  getStarData,
  getTitle
};
