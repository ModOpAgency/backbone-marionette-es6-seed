/*global -$ */
'use strict';
// generated on 2015-05-11 using generator-gulp-webapp 0.3.0
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    notify = require('gulp-notify'),
    sprite = require('css-sprite').stream,
    watchify = require('watchify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    browserSync = require('browser-sync'),
    buffer = require('vinyl-buffer'),
    _ = require('lodash'),
    reload = browserSync.reload;

gulp.task('browserify', function() {
    var b = browserify('./app/scripts/main.js');
    var w = watchify(b, {
        poll: true
    });

    function rebundle() {
        return w.bundle()
            .pipe(source('main.js'))
            .pipe(buffer())
            .pipe($.sourcemaps.init({
                loadMaps: true
            }))
            .on('error', function(err) {
                return notify().write(err);

            })
            .pipe($.sourcemaps.write('./'))
            .pipe(gulp.dest('.tmp/scripts'))
            .pipe(reload({
                stream: true
            }));
    }
    w.on('update', function() {
        rebundle();
    });
    return rebundle();
});


gulp.task('styles', function() {
    gulp.src(['app/styles/main.scss', 'app/styles/vendor.scss'])
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            outputStyle: 'nested', // libsass doesn't support expanded yet
            precision: 10,
            includePaths: ['.'],
        }).on('error', function(err) {
            return notify().write(err);
            this.emit('end');
        }))
        .pipe($.postcss([
            require('autoprefixer-core')({
                browsers: ['last 1 version']
            })
        ]))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('.tmp/styles'))
        .pipe(reload({
            stream: true
        }));
});


gulp.task('sprites', function() {
    return gulp.src('app/images/*.png')
        .pipe(sprite({
            name: 'sprite',
            style: '_sprite.scss',
            cssPath: '../images/sprite/',
            processor: 'scss'
        }))
        .pipe($.if('*.png', gulp.dest('app/images/sprite'), gulp.dest('app/styles/scss/helper')));
});

gulp.task('html', ['styles'], function() {
    var assets = $.useref.assets({
        searchPath: ['app', '.']
    });

    return gulp.src('app/*.html')
        .pipe(assets)
        .pipe($.if('*.css', $.csso()))
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.if('*.html', $.minifyHtml({
            conditionals: true,
            loose: true
        })))
        .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
    return gulp.src('app/images/**/*')
        .pipe($.cache($.imagemin({
            progressive: true,
            interlaced: true,
            // don't remove IDs from SVGs, they are often used
            // as hooks for embedding and styling
            svgoPlugins: [{
                cleanupIDs: false
            }]
        })))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('extras', function() {
    return gulp.src([
        'app/*.*',
        '!app/*.html'
    ], {
        dot: true
    }).pipe(gulp.dest('dist'));
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));
gulp.task('clean:js', require('del').bind(null, ['.tmp/scripts']));

gulp.task('serve', ['styles', 'browserify', 'sprites'], function() {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: ['.tmp', 'app'],
            routes: {}
        }
    });

    // watch for changes
    gulp.watch([
        'app/*.html',
        'app/images/**/*'
    ]).on('change', reload);

    gulp.watch('app/styles/**/*.scss', ['styles']);
});

gulp.task('serve:dist', ['build'], function() {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: 'dist',
            routes: {}
        }
    });
});

gulp.task('build', ['sprites', 'html', 'styles:build', 'images', 'extras', 'sprite:build', 'browserify:build'], function() {
    return gulp.src('dist/**/*').pipe($.size({
        title: 'build',
        gzip: true
    }));
});

gulp.task('browserify:build', ['clean:js'], function() {
    return browserify('./app/scripts/main.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('main.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('styles:build', ['styles'], function() {
    return gulp.src(['app/styles/vendor.scss', 'app/styles/main.scss'])
        .pipe($.sass({
            outputStyle: 'nested', // libsass doesn't support expanded yet
            precision: 10,
            includePaths: ['.'],
        }).on('error', function(err) {
            return notify().write(err);
            this.emit('end');
        }))
        .pipe($.postcss([
            require('autoprefixer-core')({
                browsers: ['last 1 version']
            })
        ]))
        .pipe(gulp.dest('dist/styles'))
});


gulp.task('sprite:build', function() {
    return gulp.src('app/images/sprite/*')
        .pipe(gulp.dest('dist/images/sprite'));
});

gulp.task('styles:vendor', function() {
    return gulp.src('dist/styles/vendor.css')

    .pipe($.uncss({
            html: ['dist/index.html']
        }))
        .pipe($.csso())
        .pipe(gulp.dest('dist/styles'));
})
gulp.task('default', ['clean'], function() {
    gulp.start('build');
});
