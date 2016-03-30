module.exports = {
  entry: [
    './jsx/app.jsx'
  ],
  output: {
    path: __dirname + '/js/',
    publicPath: '/js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
