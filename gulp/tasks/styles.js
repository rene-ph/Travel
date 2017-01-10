/**
 * @Summary
 * Added support postCSS with:
 ** vendor css naming convention (autoprefixer)
 ** variables  (postcss-simple-vars')
 ** nesting elements like SASS (postcss-nested)
 ** using @import (postcss-import)
 ** mixin support (postcss-mixins)
 ** convert hex to rgb color (postcss-hexrgba)
 ** 
 */
var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require("postcss-mixins"),
hexrgba = require("postcss-hexrgba");

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
    .on('error', function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
