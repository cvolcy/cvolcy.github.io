var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');

gulp.task('styles', function(){
  gulp.src(['content/sass/**/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('static/css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('static/css/'))
});

gulp.task('scripts', function(){
  return gulp.src('content/scripts/**/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('site.js'))
    .pipe(babel())
    .pipe(gulp.dest('static/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('static/js/'))
});

gulp.task('build', ["styles", "scripts"]);

gulp.task('default', ["build"]);

gulp.task('dev-watch', ["styles", "scripts"], function(){
  gulp.watch("content/sass/**/*.scss", ['styles']);
  gulp.watch("content/scripts/**/*.js", ['scripts']);
});
