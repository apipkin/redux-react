const Path = require('path');
const Webpack = require('webpack');

module.exports = {
  entry: {
    'dist/app.bundle': './src/app'
  },
  output: {
    path: './',
    filename: '[name].js'
  },
  resolve: {
    alias: {
      components: Path.join(__dirname, './src/components'),
      utils: Path.join(__dirname, './src/utils')
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new Webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    new Webpack.optimize.OccurenceOrderPlugin()
  ];
} else {
  module.exports.devtool = 'inline-source-map';
}
