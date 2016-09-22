var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/components/app.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public',
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
    },
    {
        test: /\.jpg$|\.gif$|.png$/i,
        loader: "file-loader?name=./images/[name].[ext]"
      },
      {
        test: /\.otf$|\.ttf$/i,
        loader: "file-loader?name=./fonts/[name].[ext]"
      }
    ]
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
