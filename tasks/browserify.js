var gulp = require('gulp');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var stringify = require('stringify');
var browserify = require('browserify');

stringify.registerWithRequire({
    extensions: ['.txt', '.html'],
    minify: true,
    minifier: {
        extensions: ['.html'],
        options: {
            // html-minifier options 
        }
    }
});


module.exports = function() {
    var bundleStream = browserify('./src/scripts/app.js')
        .transform(stringify(['.html']))
        .bundle();

    bundleStream
        .pipe(source('app.js'))
        .pipe(gulp.dest('./public/js'))
};