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
            baseDir: 'dist/'
        },
        options: {
            reloadDelay: 250
        },
        notify: false
    });
});

// JS compilation for development

gulp.task('scripts', function() {
    
    // JS file locations

    return gulp.src([
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/popper.js/dist/js/popper.min.js',
            'src/js/**/*.js'
        ])

        // concatenated version of js files
        .pipe(concat('script.js'))

        // compress JS code
        .pipe(uglify())

        // location of concatenated script
        .pipe(gulp.dest('dist'))

        // notify browserSync to reload
        .pipe(browserSync.reload({stream: true}));
});

// JS compilation for deployment

gulp.task('scripts-prod', function() {
    
    // JS file locations

    return gulp.src([
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/popper.js/dist/js/popper.min.js',
            'src/js/**/*.js'
        ])

        // concatenated version of js files
        .pipe(concat('script.js'))

        // compress JS code
        .pipe(uglify())

        // location of concatenated script
        .pipe(gulp.dest('dist'))
});

// SCSS compilation for development

gulp.task('styles', function () {

    // grab all scss files

    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/styles/**/*.scss'])

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

// SCSS compilation for deployment

gulp.task('styles-prod', function () {

    // grab all scss files

    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/styles/**/*.scss'])

        .pipe(sass())

        .pipe(autoprefixer())

        // concatenated version of css files
        .pipe(concat('styles.css'))

        // compress CSS code
        .pipe(csso())

        // location of css file
        .pipe(gulp.dest('dist'))
});

// HTML compilation for development

gulp.task('html', function() {

    // watch all HTML files and refresh when something changes
    return gulp.src('src/*.html')

        // stream files to dist folder        
        .pipe(gulp.dest('dist'))

        // notify browserSync to reload for any file changes
        .pipe(browserSync.reload({stream: true}))

});

// HTML compilation for deployment

gulp.task('html-prod', function() {

    // watch all HTML files and refresh when something changes
    return gulp.src('src/*.html')

        // stream files to dist folder        
        .pipe(gulp.dest('dist'))

});

// delete dist folder if present

gulp.task('clean', function() {
    return shell.task([
        'rm -rf dist'
    ]);
});

// create dist folder

gulp.task('scaffold', function() {
    return shell.task([
        'mkdir dist'
        ]
    );
});

// set up default development run

gulp.task(
    'default',
    ['browserSync', 'scripts', 'styles', 'html'],
    function() {
        
        // set up gulp watch for js files    
        gulp.watch('src/js/**', ['scripts']);
        
        // set up gulp watch for scss files    
        gulp.watch('src/styles/**', ['styles']);

        // set up gulp watch for html files    
        gulp.watch('src/*.html', ['html']);

    }
);

// set up deployment run

gulp.task(
    'deploy',
    gulpSequence(
        'clean',
        'scaffold',
        ['scripts-prod', 'styles-prod', 'html-prod']
    )
);