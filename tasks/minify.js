module.exports = function minify(gulp, plugins) {
	gulp.task('minify', callback => plugins.runSequence([
		'minify-sass',
	], callback));

	gulp.task('minify-sass', () =>
		gulp.src('source/sass/*.scss')
				.pipe(plugins.plumber())
				.pipe(plugins.sassGlob())
				.pipe(plugins.sass())
				.on('error', plugins.util.log)
				.pipe(plugins.autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
				.on('error', plugins.util.log)
				.pipe(plugins.jsbeautifier())
				.on('error', plugins.util.log)
				.pipe(gulp.dest('dist'))
				.on('error', plugins.util.log)
				.pipe(plugins.cssmin())
				.on('error', plugins.util.log)
				.pipe(plugins.rename({
					suffix: '.min',
				}))
				.pipe(gulp.dest('dist'))
				.on('error', plugins.util.log)
	);
};
