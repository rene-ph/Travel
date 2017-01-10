/**
 * @Summary
 * Added the webpack extension to unify javascripts (webpack)
 */
var gulp = require('gulp'),
webpack = require('webpack');

gulp.task('scripts', function(callback) {
  webpack(require('../../webpack.config.js'), function() {
      console.log("webpack finished scripts task");
      callback();
  });
});
