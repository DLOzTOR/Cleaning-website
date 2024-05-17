'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { watch, series } = require("gulp");
const mainScssLocation = "./assets/scss/app.scss";
const scssLocation = "./assets/scss/*.scss";
const scssBuildLocation = "./assets/css";
function buildStyles() {
  return gulp.src(mainScssLocation)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(scssBuildLocation));
};

exports.buildScss = buildStyles;

gulp.task("watch",
    function () {
        gulp.watch(scssLocation, ['sass']).pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(scssBuildLocation));
    }
);
exports.watch = function () {
    watch(scssLocation, buildStyles);
}