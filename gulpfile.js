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

// SCSS compilation

gulp.task('styles', function () {

    // grab all scss files

    return gulp.src('src/styles/**/*.scss')

        .pipe(sass().on('error', sass.logError))

        .pipe(autoprefixer())

        // concatenated version of css files
        .pipe(concat('styles.css'))

        // compress CSS code
        .pipe(csso())

        // location of css file
        .pipe(gulp.dest('dist'))

        // notify browserSync to reload
        .pipe(browserSync.reload({stream: true}));;
});

// HTML compilation

gulp.task('html', function() {

    // watch all HTML files and refresh when something changes
    return gulp.src('src/*.html')

        // stream files to dist folder        
        .pipe(gulp.dest('dist'))

        // notify browserSync to reload for any file changes
        .pipe(browserSync.reload({stream: true}))

});

// delete dist folder if present

gulp.task('clean', function() {
    return shell.task([
        'rm -rf dist'
    ]);
});

// create dist folder

gulp.task('deploy', function() {
    return shell.task([
        'mkdir dist'
        ]
    );
});