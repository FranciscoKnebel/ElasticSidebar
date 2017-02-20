module.exports = function clean(gulp, plugins) {
	gulp.task('clean', callback => plugins.runSequence([
		'clean-dist',
	], callback));

	gulp.task('clean-dist', () => gulp.src('dist/**/*.{js,css}', { read: false }).pipe(plugins.clean()));
};
