const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

// Add dev-server and hot reloading to webpack config.
webpackConfig.entry.app.unshift(
  `webpack-dev-server/client?http://${HOST}:${PORT}/`,
  'webpack/hot/dev-server',
);

webpackConfig.module.rules[0].use.options.presets.push('react-hmre');
webpackConfig.plugins = webpackConfig.plugins.concat([
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
  }),
  new webpack.HotModuleReplacementPlugin(),
]);

const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
  stats: {colors: true},
  hot: true,
  contentBase: webpackConfig.output.path,
});

server.listen(PORT);
