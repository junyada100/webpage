const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  node: {
    fs: "empty"
  },
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src', ignore: [ '*.js' ] }
    ],
    { copyUnmodified: true })
  ],
  serve: {
  }
};

