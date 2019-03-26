var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('t1', function () {
    return gulp.src('App/SCSS/*.scss') // путь к файлам-исходникам
    .pipe(sass()) // название плагина, через который прогоняем их
    .pipe(gulp.dest('App/CSS')) // путь к папке, куда помещаем конечные файлы
})