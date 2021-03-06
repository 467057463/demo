const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const autoprefixer = require('autoprefixer');
const precss = require('precss');


module.exports = {
  mode: "development",
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, '/')
  },
  resolve: {
    alias: {
      '@': resolve('src')
    },
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|tsx|ts)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  precss,
                  autoprefixer
                ]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: 'public/index.html'
    })
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       styles: {
  //         name: 'styles',
  //         test: /\.(sa|sc|c)ss$/,
  //         chunks: 'all',
  //         enforce: true,
  //       },
  //     }
  //   }
  // }
}