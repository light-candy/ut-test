const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

 module.exports = {
  mode: 'production',
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
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.scss', '.css', '.png', '.woff', '.woff2']
  },
  output: {
    publicPath: '',
    path: path.resolve(__dirname, './dist'),
    filename: "bundle.js",
  },
   optimization:{
     minimizer:[
       new OptimizeCssAssetsPlugin(),
       new TerserPlugin()
     ],
   },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename:"[name].css"
    })
  ],
  devtool: 'source-map',
};
