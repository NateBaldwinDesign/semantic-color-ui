var   gulp = require('gulp'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      autoprefixer = require('gulp-autoprefixer'),
      sassdoc = require('sassdoc'),
      clean = require('gulp-rimraf');

var   output = './dist',
      sassInput = './src/scss/**/*.scss',
      sassOutput = './dist/css',
      demoInput = './src/demo/index.html',
      demoOutput = './dist/demo',
      sassOptions = {
        errLogToConsole: true,
        outputStyle: 'expanded'
      },
      autoprefixerOptions = {
        browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
      };

gulp.task('clean-dist', function() {
    return gulp.src(output)
      .pipe(clean());
});

gulp.task('sass', ['clean-dist'], function () {
  return gulp
    .src(sassInput)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(sassOutput))
    // .pipe(sassdoc())
    // // Release the pressure back and trigger flowing mode (drain)
    // // See: http://sassdoc.com/gulp/#drain-event
    // .resume();
});

gulp.task('copy-demo', ['clean-dist'], function() {
  return gulp
    .src(demoInput)
    .pipe(gulp.dest(demoOutput));
});

gulp.task('build', ['sass', 'copy-demo']);

gulp.task('watch', ['build'], function() {
  return gulp
    .watch(sassInput, ['build'])
});
