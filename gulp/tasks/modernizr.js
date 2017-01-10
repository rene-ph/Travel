/**
 * @Summary
 * The way it works is if you have a css class with the name of flexbox
 *  .flexbox .some-other-name { }
 * it will detect the CLASS NAME but it doesnt mean in reality if it has a property or not inside the whole CSS.
 * DO NOT USE THIS 
*/
var gulp = require('gulp'),
modernizr = require('gulp-modernizr');

gulp.task('modernizr', function() {
 return  gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
        .pipe(modernizr({
          "options": [
             "setClasses" 
           ]
        }))
        .pipe(gulp.dest('./app/temp/scripts/'));
});