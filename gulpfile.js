var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function () {
	gulp.src('./sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./css/'));
});

gulp.task('watch', function () {
	gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
