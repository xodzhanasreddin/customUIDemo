import {isProduction, dir} from './globals';
import {rules} from './rules';
import {plugins} from './plugins';

const polyfillPath = `${dir.config}/polyfill`;

const config = {
  entry: {
    main: [polyfillPath, dir.src]
  },
  output: {
    path: dir.dist,
    filename: '[name].[hash:6].js',
    publicPath: ''
  },
  devServer: isProduction ? {} : {
    contentBase: 'dist',
    historyApiFallback: true,
    stats: 'errors-only'
  },
  context: dir.src,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [
      'node_modules'
    ]
  },
  module: {
    rules
  },
  plugins
};

export default config;
