import {isProduction, dir} from './globals';
import {extractCss} from './plugins';

const lintLoader = {
  test: /\.tsx?$/,
  enforce: 'pre',
  use: [{
    loader: 'tslint-loader',
    options: {
      configFile: `${dir.config}/tslint.json`,
      emitErrors: true,
      failOnHint: true
    }
  }]
};

const es3fyLoader = {
  test: /\.tsx$/,
  enforce: 'post',
  loader: 'es3ify-loader'
};

const tsxLoader = {
  test: /\.tsx?$/,
  use: [{
    loader: 'babel-loader'
  },
  {
    loader: 'ts-loader',
    options: {
      configFile: `${dir.config}/typescript/tsconfig.webpack.json`
    }
  }
  ],
  exclude: '/node_modules/'
};

const styleLoader = {
  test: /\.s?css$/,
  use: extractCss.extract({
    use: [{
      loader: 'css-loader',
      options: {
        sourceMap: !isProduction,
        minimize: isProduction,
        importLoaders: 2
      }

    },
    {
      loader: 'sass-loader'
    }
    ],
    fallback: 'style-loader'
  })
};

const assetsLoaders = [
  {
    test: /\.woff2?$|\.ttf$|\.eot$/,
    use: [{
      loader: 'file-loader',
      options: {
        name: '[name].[hash:6].[ext]',
        outputPath: 'assets/fonts/'
      }
    }]
  },
  {
    test: /\.png$|\.jpe?g$/,
    use: [{
      loader: 'file-loader',
      options: {
        name: '[name].[hash:6].[ext]',
        outputPath: 'assets/img/'
      }
    }]
  },
  {
    test: /\.svg$/,
    use: [{
      loader: 'svg-sprite-loader',
      options: {
        extract: true,
        spriteFilename: 'assets/svg/icons.svg'
      }
    }]
  }
];

const rules = [
  lintLoader,
  es3fyLoader,
  tsxLoader,
  styleLoader,
  ...assetsLoaders
];

export {rules};
