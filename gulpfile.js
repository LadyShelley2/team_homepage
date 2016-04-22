/**
 * Created by zl on 16-4-22.
 */
var gulp = require('gulp')
var jade=require('gulp-jade')
var less = require('gulp-less')

var paths={
    css:['stylesheet/*.less'],
    jade:['*.jade']
}
gulp.task('css',function(){
    return gulp.src(paths.css)
        .pipe(less())
        .pipe(gulp.dest('stylesheet'));
});
gulp.task('jade',function(){
    return gulp.src(paths.jade)
        .pipe(jade())
        .pipe(gulp.dest('/'));
});
gulp.task('watch',function(){
    gulp.watch(paths.css,['css']);
    gulp.watch(paths.jade,['jade']);
});
gulp.task('default',['watch','css','jade']);