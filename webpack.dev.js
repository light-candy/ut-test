const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.(png|svg)$/,
        use: {
          loader: 'file-loader',
          options:{
            name:"[name].[ext]",
            outputPath:"images"
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.scss', '.css', '.png', '.woff', '.woff2', '.eot', '.ttf', '.svg']
  },
  output: {
    publicPath: '',
    path: path.resolve(__dirname, './dist'),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
  devtool: 'eval-source-map',
};
