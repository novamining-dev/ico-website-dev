var path = require('path');
var webpack = require('webpack');
var AsyncAwaitPlugin = require('webpack-async-await') ;

console.log(__dirname);
module.exports = {
  
  entry: ['babel-polyfill',  './client/app.jsx'],
  output: {
    path: path.resolve(__dirname, './server/public/javascripts/build'),
    filename: "app.js"
  },




 module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
  ,
  plugins: [


      new webpack.ProvidePlugin({
         $: "jquery",
         jQuery: "jquery",
         "window.jQuery": "jquery"
     })
     
  ]
};

