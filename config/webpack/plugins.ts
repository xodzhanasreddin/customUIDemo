import {ProvidePlugin, HashedModuleIdsPlugin, optimize} from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import SvgSpritePlugin from 'svg-sprite-loader/plugin';

import {isProduction, dir} from './globals';

const extractCss = new ExtractTextPlugin({
  filename: '[name].css',
  allChunks: true,
  disable: false
});

const cleanWebpack = new CleanWebpackPlugin(dir.dist, {
  root: dir.root
});

const htmlWebpack = new HtmlWebpackPlugin({
  inject: true,
  hash: true,
  template: `${dir.src}/index.html`,
  filename: 'index.html',
  minify: {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true
  }
});

const uglifyJs = new UglifyJsPlugin({
  include: ['vendor'],
  sourceMap: true,
  uglifyOptions: {
    ie8: true
  }
});

const svgSprite = new SvgSpritePlugin();

const provide = new ProvidePlugin({
  '$': 'jquery',
  'jQuery': 'jquery',
  'window.jQuery': 'jquery'
});

const plugins = [
  cleanWebpack,
  htmlWebpack,
  extractCss,
  svgSprite,
  provide
  // new HashedModuleIdsPlugin(),
  // new optimize.CommonsChunkPlugin({
  //   name: 'vendor',
  //   minChunks: (module) => {
  //     return module.context && module.context.indexOf('node_modules') !== -1;
  //   }
  // })
];

if (isProduction) {
  plugins.push(uglifyJs);
}

export {plugins, extractCss};
