var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'react', 'lodash', 'react-dom', 'redux', 'react-redux',
  'redux-thunk', 'react-router', 'axios', 'immutable',
  'react-router-dom'
  ];

const BUNDLE = [
  './src/components/app.jsx'
];

module.exports = {
  entry: {
    bundle: BUNDLE,
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
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
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};