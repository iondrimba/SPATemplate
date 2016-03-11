'use strict';
var Promise = require('es6-promise').Promise;
var gulp = require('gulp');

// using vinyl-source-stream: 
gulp.task('browserify', require('./tasks/browserify.js'));

//eslint task
gulp.task('lint', require('./tasks/eslint.js'));

//scss lint task
gulp.task('scsslint', require('./tasks/scss-lint.js'));

//uglify task
gulp.task('uglify', require('./tasks/uglify.js'));

//imagemmin task
gulp.task('imagemin', require('./tasks/imagemin.js'));

//sass - scss task
gulp.task('sass', require('./tasks/sass.js'));

//watch js/scss/teplate files
gulp.task('watch', require('./tasks/watch.js'));

//html min 
gulp.task('html-min', require('./tasks/html-min.js'));

//post css
gulp.task('post-css', require('./tasks/post-css.js'));

//local server
gulp.task('browser-sync', require('./tasks/browser-sync.js'));

//coveralls
gulp.task('coveralls', require('./tasks/coveralls.js'));

// Default Task
gulp.task('default', ['scsslint', 'sass', 'lint', 'browserify', 'browser-sync', 'watch']);

// Publish Task
gulp.task('deploy', ['scsslint', 'sass', 'lint', 'browserify', 'browser-sync', 'watch', 'html-min']);

//CI
gulp.task('travis', ['scsslint', 'sass', 'lint', 'browserify', 'coveralls', 'imagemin', 'html-min', 'uglify']);