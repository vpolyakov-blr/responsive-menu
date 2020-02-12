const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "src"
        }
    });
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('scss', function() {
    return gulp.src("src/sass/**/*.scss")
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) 
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer({
            cascade: false
        }))
        //.pipe(cleanCSS({compatibility: 'ie8'}))
        //includePaths: require('node-normalize-scss').includePaths
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.scss", gulp.parallel('scss'));
})

gulp.task('default', gulp.parallel('watch', 'server', 'scss'));