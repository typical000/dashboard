const webpack = require('webpack')
const path = require('path')

const dependencies = require('./package.json').dependencies

/**
 * Use minified version of webpack configuration to make application "just work".
 * Don't use it in any case outside of this example.
 */
module.exports = {
  mode: 'development', // Just for quick setup
  entry: {
    app: [path.join(__dirname, 'src', 'index.js')],
    vendor: Object.keys(dependencies),
  },
  output: {
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.mjs', '.js', '.json'],
  },
  devtool: 'inline-source-map',
  module: {
    noParse: /\.min\.js/,
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [],
          },
        },
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: 'graphql-tag/loader',
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true,
        },
      },
    },
  },
}
