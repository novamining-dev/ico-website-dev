var path = require('path');

module.exports = {
  entry: [
    "react-hot-loader/patch",
    "webpack/hot/only-dev-server",
    "./client/app.jsx",
  ],
  output: {
    path: path.resolve(__dirname, './server/public/javascripts/build'),
    filename: "app.js",
    publicPath: "/static/"

    
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      include: __dirname,
      query: {
        presets: [ "es2015", "react", "react-hmre" ]
      }
    }]
  }
}