'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


// Lint Task
gulp.task('lint', function() {
  return gulp.src('assets/src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
// Compile Our Sass
gulp.task('sass', function() {
  return gulp.src('assets/src/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(rename('main.css'))
    .pipe(gulp.dest('assets/dist/css/'));
});
// Concatenate & Minify JS
gulp.task('scripts', function() {
  return gulp.src('assets/src/js/**/*.js')
    .pipe(concat('all.js'))
    .pipe(rename('all.min.js'))
    .pipe(gulp.dest('assets/dist/js'));
});
// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('assets/src/js/**/*.js', gulp.parallel('lint', 'scripts'));
  gulp.watch('assets/src/scss/**/*.scss', gulp.series('sass'));
});

// Default Task
gulp.task('default', gulp.series('lint', 'sass', 'scripts', 'watch'));
