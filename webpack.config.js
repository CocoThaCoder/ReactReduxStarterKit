var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/components/app.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.scss$/
      },
      {
        use: "file-loader?name=./images/[name].[ext]",
        test: /\.jpg$|\.gif$|.png$/i
      },
      {
        use: "file-loader?name=./fonts/[name].[ext]",
        test: /\.otf$|\.ttf$/i
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
