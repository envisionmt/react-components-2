const { merge } = require('webpack-merge');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    host: 'localhost',
    port: 9000,
    historyApiFallback: true,
    overlay: true,
    hot: true,
  },
  devtool: 'cheap-eval-source-map',
  plugins: [new ReactRefreshWebpackPlugin()],
});
