var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserSync  = require('browser-sync').create();

gulp.task('watch', function() {
    
    browserSync.init({
        server: "."
    });
    
    gulp.watch('./js/**/*.js', browserSync.reload);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('./js/**/*.js', ['browserifyBundle']);
});

gulp.task('browserifyBundle', function() {
    return browserify('./js/bundle/script.js')
        .bundle()
        // Передаем имя файла, который получим на выходе, vinyl-source-stream
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./js/bundle/'));
});

gulp.task('default', ['watch']);