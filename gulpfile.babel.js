import {
  src,
  dest,
  watch,
  series,
  parallel,
} from 'gulp';
import browsersync from 'browser-sync';
import del from 'del';
import eslint from 'gulp-eslint';
import gulpif from 'gulp-if';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import webpack from 'webpack-stream';
import config from './package.json';

const server = browsersync.create();
const TerserJSPlugin = require('terser-webpack-plugin');

export const serve = (done) => {
  server.init({
    proxy: config.url,
    port: 3000,
    open: false,
  });
  done();
};

export const reload = (done) => {
  server.reload();
  done();
};

export const clean = () => del(config.assetsPath);

export const styles = () => src(`${config.srcPath}/css/style.css`)
  .pipe(plumber())
  .pipe(gulpif(process.env.NODE_ENV === 'development', sourcemaps.init()))
  .pipe(postcss())
  .pipe(gulpif(process.env.NODE_ENV === 'development', sourcemaps.write('.')))
  .pipe(dest(`${config.assetsPath}css`))
  .pipe(server.stream());

export const editorStyles = () => src(`${config.srcPath}/css/editor-style.css`)
  .pipe(postcss())
  .pipe(dest(`${config.assetsPath}css`))
  .pipe(server.stream());

export const adminStyles = () => src(`${config.srcPath}/css/admin.css`)
  .pipe(postcss())
  .pipe(dest(`${config.assetsPath}css`))
  .pipe(server.stream());

export const images = () => src(`${config.srcPath}/img/**/*.{jpg,jpeg,png,svg,gif}`)
  .pipe(dest(`${config.assetsPath}img`));

export const fonts = () => src(`${config.srcPath}/webfonts/**/*`)
  .pipe(dest(`${config.assetsPath}webfonts`))
  .pipe(server.stream());

const jsFixed = file => file.eslint !== null && file.eslint.fixed;

export const scriptLint = () => src(`${config.srcPath}/js/app.js`)
  .pipe(plumber())
  .pipe(eslint({ fix: true }))
  .pipe(eslint.format())
  .pipe(gulpif(jsFixed, dest(`${config.assetsPath}js`)))
  .pipe(eslint.failAfterError());

export const scripts = () => src([`${config.srcPath}/js/app.js`])
  .pipe(plumber())
  .pipe(webpack({
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    optimization: {
      minimizer: [
        new TerserJSPlugin({}),
      ],
    },
    mode: process.env.NODE_ENV ? 'production' : 'development',
    devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : false,
    output: { filename: 'bundle.js' },
    externals: { jquery: 'jQuery' },
  }))
  .pipe(dest(`${config.assetsPath}js`))
  .pipe(server.stream());

export const watchFiles = () => {
  watch(`${config.srcPath}css/**/*`, series(styles, editorStyles, adminStyles));
  watch('./tailwind.config.js', series(styles, editorStyles, adminStyles));
  watch(`${config.srcPath}js/**/*`, series(scriptLint, scripts));
  watch(`${config.srcPath}img/**/*`, images);
  watch('./**/*.php', reload);
};

export const js = series(scriptLint, scripts);
export const buildcss = parallel(styles, editorStyles, adminStyles);
// eslint-disable-next-line max-len
export const dev = series(clean, parallel(styles, editorStyles, adminStyles, images, fonts, scripts), serve, watchFiles);
export const build = series(clean, parallel(styles, editorStyles, adminStyles, images, fonts, scripts));
export default dev;
