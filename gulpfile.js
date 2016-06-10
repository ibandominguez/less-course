'use strict';

var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
  gulp
    .src('src/app.less')
    .pipe(less())
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['less']);
