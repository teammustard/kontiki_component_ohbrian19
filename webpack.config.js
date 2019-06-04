var path = require("path"); 

module.exports = {
  entry: path.join(__dirname, "/client/src/index.jsx"),
  output: {
    path: path.join(__dirname, "/client/dist"),
    filename: "bundle.js"
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