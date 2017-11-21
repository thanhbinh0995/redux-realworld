const polyfill = require('babel-polyfill');
const path = require('path');
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;

module.exports = () => ({
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: '#eval-source-map',
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['es2015', { modules: false }],
                'react',
                'stage-2',
              ],
              plugins: ['react-hot-loader/babel'],
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
      { test: /\.(jpg|png|woff|woff2|eot|ttf|svg|gif)$/, loader: 'url-loader?name=src/style/img/[name].[ext]' }
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './src',
    hot: true,
    port: 3000
  },
});
