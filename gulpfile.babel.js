import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import gutil from 'gulp-util';
import concat from 'gulp-concat';
import sass from 'gulp-sass';
import watch from 'gulp-watch';
import browserSync from 'browser-sync';
import del from 'del';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.js';


const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('webpack-dev-server', function(callback) {
    var myConfig = Object.create(webpackConfig);
    var compiler = webpack(myConfig);

    new WebpackDevServer(compiler, {
        watch: true,
        outputPath: myConfig.output.path,
        publicPath: myConfig.output.publicPath,
        filename: myConfig.output.filename,
        contentBase: myConfig.devServer.contentBase,
        historyApiFallback: myConfig.devServer.historyApiFallback,
        stats: {
        	colors: true
        }
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/");

        // keep the server alive or continue?
        callback();
    });
});

gulp.task('webpack', () => {
return gulp.src('./jsx/app.jsx')
  .pipe(webpackStream(webpackConfig))
  .pipe(gulp.dest('./dist/js'));
});

gulp.task('html', ['styles'], () => {
  return gulp.src('*.html')
    .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.cssnano()))
    .pipe($.if('*.html', $.htmlmin({collapseWhitespace: false})))
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', () => {
  return gulp.src('./sass/**/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe($.sourcemaps.write())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({stream: true}));
});

gulp.task('images', () => {
  return gulp.src('./images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', () => {
  return gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function (err) {})
    .concat('./fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('dist', ['webpack', 'html', 'images', 'fonts'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist', 'Cordova/www']));

gulp.task('serve', ['styles', 'fonts', 'webpack-dev-server'], () => {

  gulp.watch([
    './*.html',
    './images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);

  gulp.watch('./sass/**/*.scss', ['styles']);
  gulp.watch('./fonts/**/*', ['fonts']);
});

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  });
});

gulp.task('default', ['clean'], () => {
  gulp.start('dist');
});
