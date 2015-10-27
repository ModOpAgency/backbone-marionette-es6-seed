/*global -$ */
'use strict';
// generated on 2015-05-11 using generator-gulp-webapp 0.3.0
var gulp = require('gulp'),
    gulpsync = require('gulp-sync')(gulp),
    gutil = require('gulp-util'),
    $ = require('gulp-load-plugins')(),
    gutil = require('gulp-util'),
    through = require('through'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    _ = require('lodash');

gulp.task('extras', function() {
    return gulp.src([
        'app/*.*',
        '!app/*.html'
    ], {
        dot: true
    }).pipe(gulp.dest('dist'));
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

gulp.task('build', gulpsync.sync(['html:build', 'extras', 'copy:assets', 'images:build']), function() {
    var result = gulp.src('dist/**/*').pipe($.size({
        title: 'build',
        gzip: true
    }));
    return result;
});

gulp.task('html:build', function() {
    var assets = $.useref.assets({
        searchPath: ['app', '.', 'dist']
    });

    return gulp.src('app/*.html')
        .pipe(assets)
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.if('*.html', $.minifyHtml({
            conditionals: true,
            loose: true
        })))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy:assets', function() {
    return gulp.src('app/assets/**/*')
        .pipe(gulp.dest('dist/assets/'));
});

gulp.task('images:build', function() {
    return gulp.src(['app/assets/images/**/*.{png,jpg,gif}'])
        .pipe($.cache($.imagemin({
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/assets/images'));
});
gulp.task('default', ['clean'], function() {
    gulp.start('build');
});

/* dev only task */
gulp.task('sprite', function () {
  return gulp.src('app/assets/images/source/*.{png,jpg}').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '_sprite.scss',
    imgPath: '../assets/images/sprite/sprite.png',
    padding: 10
  }))
   .pipe($.if('*.png', gulp.dest('app/assets/images/sprite'), gulp.dest('app/styles/helper')));
});
