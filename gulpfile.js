'use strict';

const gulp = require('gulp');
const closureCompiler = require('gulp-closure-compiler');

gulp.task('compile', ()=>
{
    let closureOptionsGame =
    {
        compilerPath: './node_modules/google-closure-compiler-java/compiler.jar',
        fileName: 'index.min.js',
        maxBuffer: 4000,
        tieredCompilation: true,
        continueWithWarnings: true,
        compilerFlags:
        {
            warning_level: 'VERBOSE',
            compilation_level: 'ADVANCED',

            language_in: "ECMASCRIPT6",
            language_out: "ES5_STRICT",

            use_types_for_optimization: true,
            externs: './externs/pixi-4.x-externs.js',

            output_wrapper: '(function(){%output%}).call(window);'
        }
    };

    return gulp.src('./test/src/index.js')
        .pipe(closureCompiler(closureOptionsGame))
        .pipe(gulp.dest('./test/out'));
});

gulp.task('gcc', gulp.series('compile'));


