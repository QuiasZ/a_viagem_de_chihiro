const Gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const sass = require('gulp-sass')(require('sass'));
const Imageminimo = require("gulp-imagemin");


function Compilasass(){
    return Gulp.src("./src/styles/*.scss")
        .pipe(sass({outputStyle: "compressed"}))
        .pipe(Gulp.dest("./dist/styles"));
}

function Imagemmin(){
    return Gulp.src("./src/images/**")
        .pipe(Imageminimo())
        .pipe(Gulp.dest("./dist/images"));
}

exports.default = Gulp.parallel(Compilasass, Imagemmin);

exports.watch = function(){
    Gulp.watch("./src/styles/*.scss", Gulp.parallel(Compilasass))
}