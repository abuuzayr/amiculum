[![buddy pipeline](https://app.buddy.works/builtforfifty/amiculum-fed-assignment/pipelines/pipeline/125098/badge.svg?token=b4cc1ef3fb8ac1b8e9672c03dd98328fb48bd87e72d523c4e8a4a5af5d822321 "buddy pipeline")](https://app.buddy.works/builtforfifty/amiculum-fed-assignment/pipelines/pipeline/125098)

Repository for Amiculum Front End Development Assignment
========================================================

Project Board
-------------

### [View project board on Trello](https://trello.com/b/MnKYanmf/amiculum-front-end-development-assignment)

Tools
----------

- [Bootstrap v4](https://getbootstrap.com/)
- [Gulp](https://gulpjs.com/)
- [gulp-sass](https://github.com/dlmanning/gulp-sass)
- [gulp-uglify](https://github.com/terinjokes/gulp-uglify)
- [browser-sync](https://github.com/BrowserSync/browser-sync)
- [autoprefixer](https://github.com/postcss/autoprefixer)
- [Buddy](https://buddy.works/)
- [gulp-concat](https://github.com/contra/gulp-concat)
- [gulp-strip-comments](https://github.com/RnbWd/gulp-strip-comments)
- [gulp-shell](https://github.com/sun-zheng-an/gulp-shell)
- [gulp-sequence](https://github.com/teambition/gulp-sequence)
- [Visual Studio Code](https://code.visualstudio.com/)

Deployment
----------

Deployment is done via [Buddy](https://buddy.works/) via a deployment pipeline on Docker. Deployment is automatically triggered via `git push` to this repository.

Designers
---------

Comments are removed from the deployed site so please refer to the source files in this repository. Mobile view recommendations are only written in HTML comments in the `index.html` file 

Developers
----------

There are 2 ways to trace the paths taken when building this site:

- via commit messages - micro-commit method was preferred for this purpose
- via comments in code - `gulp-strip-comments` removes comments in code, so please refer to the comments in this repository and not in the source code in the browser

Testing
-------

Desktop browser testing was done on the latest versions of 

- Chrome (Windows & Mac)
- Firefox (Windows & Mac)
- Microsoft Edge (Windows)

Mobile device testing was done on

- Chrome (iOS & Android)
- Safari (iOS)