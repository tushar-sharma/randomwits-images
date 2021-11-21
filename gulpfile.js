#!/usr/bin/env node

"use strict";
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

export default () => (
    gulp.src(['./**/*.{jpg,jpeg,png}', '!node_modules/**'])
        .pipe(imagemin())
        .pipe(gulp.dest('.'))
);

