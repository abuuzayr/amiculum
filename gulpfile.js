// initialise all variables and require all tools we will be using

var gulp            = require('gulp');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');
var sass            = require('gulp-sass');
var sourceMaps      = require('gulp-sourcemaps');
var csso            = require('gulp-csso');
var browserSync     = require('browser-sync');
var autoprefixer    = require('gulp-autoprefixer');
var stripComments   = require('gulp-strip-comments');
var gulpSequence    = require('gulp-sequence');
var shell           = require('gulp-shell');

// BrowserSync configuration

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: "src/"
        },
        options: {
            reloadDelay: 250
        },
        notify: false
    });
});

// JS compilation

gulp.task('scripts', function() {
    
    // JS file locations

    return gulp.src(['src/js/**/*.js'])

        // concatenated version of js files
        .pipe(concat('script.js'))

        // compress JS code
        .pipe(uglify())

        // location of concatenated script
        .pipe(gulp.dest('dist'))

        // notify browserSync to reload
        .pipe(browserSync.reload({stream: true}));
});