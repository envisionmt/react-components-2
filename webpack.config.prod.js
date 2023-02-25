const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        parallel: true,
      }),
    ],
  },
});
