// initialise all variables and require all tools we will be using

var gulp            = require('gulp');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');
var sass            = require('gulp-sass');
var sourceMaps      = require('gulp-sourcemaps');
var imagemin        = require('gulp-imagemin');
var minifyCSS       = require('gulp-csso');
var browserSync     = require('browser-sync');
var autoprefixer    = require('gulp-autoprefixer');