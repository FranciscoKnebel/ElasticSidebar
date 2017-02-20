const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

plugins.runSequence = require('run-sequence');

gulp.task('default', callback => plugins.runSequence('build', callback));

require('./tasks/clean')(gulp, plugins);
require('./tasks/build')(gulp, plugins);
