var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('reload', function () {
	browserSync.reload();
});

gulp.task('serve', function () {
	browserSync({
		server: {baseDir: './'},
		online: false,
		port: 3003
	});
});

gulp.task('watch', function () {
	gulp.watch(['*.html', 'assets/**/*.css', 'assets/**/*.js'], ['reload']);
});

gulp.task('default', ['serve', 'watch'], function () {
});
