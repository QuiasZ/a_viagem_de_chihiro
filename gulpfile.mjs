import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import gulpSass from 'gulp-sass';
import terser from 'gulp-terser'; // Certifique-se de que esta linha está correta
import * as sass from 'sass';

const sassCompiler = gulpSass(sass);

const sassOptions = {
  outputStyle: 'compressed'
};

function styles() {
  return gulp.src('./src/styles/*.scss')
    .pipe(sassCompiler(sassOptions))
    .pipe(gulp.dest('./public/css'));
}

function images() {
  return gulp.src('./src/images/*', { encoding: false })
    .pipe(imagemin())
    .pipe(gulp.dest('./public/images'));
}

function scripts() {
  return gulp.src('./src/scripts/*.js')
    .pipe(terser()) // Use gulp-terser para minificação
    .pipe(gulp.dest('./public/js'));
}

const build = gulp.parallel(styles, images, scripts);

export { build };
export default build;

export const watch = () => {
  gulp.watch('./src/styles/*.scss', styles);
  gulp.watch('./src/scripts/*.js', scripts);
};
