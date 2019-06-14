var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
gulp.task('css', function() {
	gulp.src(['css/*css','css/*/*.css'])
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/css'))
})

gulp.task('img', function() {
	gulp.src(['img/*/*'])
	.pipe(imagemin())
	.pipe(gulp.dest('dist/img'))
})

/*gulp.task('js', function() {
	gulp.src()
})*/



gulp.task('default',['css','img'])