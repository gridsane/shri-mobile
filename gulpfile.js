var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var less = require('gulp-less');
var browserify = require('gulp-browserify');
var livereload = require('gulp-livereload');
var server = require('gulp-develop-server');
var isProduction = -1 !== process.argv.indexOf('--prod');

gulp.task('browserify', function () {
    var stream = gulp.src('src/client.js')
        .pipe(browserify({
            transform: ['reactify', 'brfs'],
            debug: true,
        }))
        .on('error', function () { console.log(arguments); });

        if (isProduction) {
            stream.pipe(uglify());
        }

        stream
            .pipe(rename('bundle.js'))
            .pipe(gulp.dest('assets'));
});

gulp.task('less', function () {
    var stream = gulp.src('src/styles/main.less')
        .pipe(less())
        .on('error', function () { console.log(arguments); })
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }));

    if (isProduction) {
            stream.pipe(minifycss());
    }

    stream
        .pipe(rename('main.css'))
        .pipe(gulp.dest('assets'));
});

gulp.task('server', function () {
    server.listen({ path: 'src/server.js' }, livereload.listen);
});

gulp.task('build', ['browserify', 'less']);

gulp.task('default', ['build', 'server'], function () {
    gulp.watch(['src/**/*.js'], ['browserify']);
    gulp.watch(['src/**/*.less'], ['less']);

    gulp.watch(['assets/**/*.css'], function (files) {
        livereload.changed(files);
    });

    // since we are render js on the server, when client code changed
    // we need to restart the server too, to not getting invariant errors
    // in browser
    gulp.watch(['assets/**/*.js', 'src/server.js'], function () {
        server.changed(function (error) {
            if (!error) {
                livereload.changed();
            }
        });
    });
});
