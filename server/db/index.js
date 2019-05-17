const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./server/db/kontiki.db');

const getAllData = (callback) => {
  db.all(`SELECT * FROM reviews`, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  })
}

const getStarData = (star, callback) => {
  db.all(`SELECT * FROM reviews WHERE star_rating=(?)`, [star], (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  })
}

module.exports = {
  getAllData,
  getStarData
};
