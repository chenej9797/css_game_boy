var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

gulp.task('uglify',function(){
	return gulp.src('source/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('public/js'))
});

gulp.task('sass', function(){
	return gulp.src('source/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/stylesheets'))
});
