const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: outputPath
  },
  devServer: {
    static: outputPath
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/react",
          ],
        },
      },
    }]
  }
}