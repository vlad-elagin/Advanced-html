// подключаем модули
var gulp =          require('gulp');
var stylus =          require('gulp-stylus');
var rename =        require('gulp-rename');
var clean =         require('gulp-clean-css');
var browserSync =   require('browser-sync').create();
var autoprefixer =  require('gulp-autoprefixer');
var notify =        require('gulp-notify');


// таск для обработки стилей
gulp.task('styles', function() {
	// берем основной файл стилей, в который импортятся все остальные
  gulp.src(['styles/general.styl'])
  	// превращаем less в чистый css
    .pipe(stylus())
    // добавляем сообщение об ошибке
    .on("error", notify.onError())
    // меняем имя
    .pipe(rename('bundle.css'))
    // добавляем вендорные префиксы
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    // сжимаем стили, чистим от комментариев
    .pipe(clean())
    // записываем изменения в папку dist
    .pipe(gulp.dest('./', { overwrite: true }))
    // перезагружаем страницу в браузере
    .pipe(browserSync.stream());
});

// таск для обработки разметки
// сейчас он просто переносит файлы из src в dist
gulp.task('html', function() {
	gulp.src(['./*.html'])
		.pipe(gulp.dest('./'));
  browserSync.reload();
});

// дефолтный таск
gulp.task('default', ['styles', 'html'], function() {
	// следим за изменениями в файлах стилей и запускаем таск обработки
  gulp.watch('styles/**/*.styl', ['styles']);
	// то же самое для html
	gulp.watch('./*.html', ['html']);

	// сервер для разработки
	browserSync.init({
    server: {
        baseDir: "./"
    }
  });
});
