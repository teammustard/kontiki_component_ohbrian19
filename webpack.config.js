var path = require("path"); 
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      use: 'babel-loader'
    },

    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url-loader'
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: ['image-webpack-loader']
    },
  ]
  }
};