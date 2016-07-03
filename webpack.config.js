var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/jsx/app.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    },
    {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
