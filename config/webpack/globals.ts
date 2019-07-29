const root = process.cwd();

const isProduction = process.env.NODE_ENV === 'production';

const dir = {
  root,
  src: `${root}/src`,
  config: `${root}/config`,
  dist: `${root}/dist`
};

export {isProduction, dir};
