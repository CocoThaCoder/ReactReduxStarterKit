var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/components/app.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot'],
        include: path.join(__dirname, 'src')
      },
      {
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
    new webpack.HotModuleReplacementPlugin()
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
