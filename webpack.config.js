const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  plugins: [new webpack.EnvironmentPlugin(['NODE_ENV'])],
  module: {
    rules: [
      {
        test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg|otf|gif|png|webp)(\?.*$|$)/,
        use: {
          loader: 'url-loader',
          options: {
            importLoaders: true,
            limit: 30000,
            name: '[name]-[hash].[ext]',
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              ['@babel/plugin-proposal-private-methods', { loose: true }],
              '@babel/plugin-proposal-optional-chaining',
              '@babel/plugin-transform-runtime',
              'emotion',
              process.env.NODE_ENV === 'development' && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
          },
        },
      },
    ],
  },
};
