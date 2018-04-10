// подключаем модули
var gulp =          require('gulp');
var stylus =          require('gulp-stylus');
var rename =        require('gulp-rename');
var clean =         require('gulp-clean-css');
var browserSync =   require('browser-sync').create();
var autoprefixer =  require('gulp-autoprefixer');
var notify =        require('gulp-notify');
var pug =           require('gulp-pug');
var injectSVG =     require('gulp-inject-svg');

gulp.task('styles', function() {
  gulp.src(['styles/general.styl'])
    .pipe(stylus())
    .on("error", notify.onError())
    .pipe(rename('bundle.css'))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(clean())
    .pipe(gulp.dest('./', { overwrite: true }))
    .pipe(browserSync.stream());
});

gulp.task('views', function() {
	gulp.src(['./views/index.pug'])
    .pipe(pug())
    .pipe(injectSVG())
    .pipe(rename('index.html'))
		.pipe(gulp.dest('./', { overwrite: true }));
  browserSync.reload();
});

// дефолтный таск
gulp.task('default', ['styles', 'views'], function() {
	// следим за изменениями в файлах стилей и запускаем таск обработки
  gulp.watch('styles/**/*.styl', ['styles']);
	// то же самое для html
	gulp.watch('./views/**/*.pug', ['views']);

	// сервер для разработки
	browserSync.init({
    server: {
        baseDir: "./"
    }
  });
});
