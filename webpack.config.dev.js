var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const BUNDLE = ['babel-polyfill', './src/components/App.jsx'];

module.exports = {
  entry: {
    index: BUNDLE,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.[chunkhash].js',
    chunkFilename: '[name].bundle.[chunkhash].js',
    publicPath: '/dist/',
  },
  devServer: {
    hot: true,
    inline: true,
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    historyApiFallback: true,
    stats: {
      colors: true,
      chunks: false,
      'errors-only': true,
    },
  },
  mode: 'development',
  module: {
    rules: [
      {
        use: ['babel-loader', 'eslint-loader'],
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
      },
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.scss$/,
      },
      {
        use: 'file-loader?name=./images/[name].[ext]',
        test: /\.jpg$|\.gif$|.png$/i,
      },
      {
        use: 'file-loader?name=./fonts/[name].[ext]',
        test: /\.otf$|\.ttf$/i,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: {
      name: entrypoint => `runtimechunk-${entrypoint.name}`,
    },
  },
  devtool: 'eval-source-map',
};
