# SPA Template 
Simple ready to go SPA template. No framework dependency.
To be used for simple static websites with little interactions.

[![Travis build status](https://travis-ci.org/iondrimba/SPATemplate.svg?branch=master)](https://travis-ci.org/iondrimba/SPATemplate)[![Coverage Status](https://coveralls.io/repos/github/iondrimba/SPATemplate/badge.svg?branch=master)](https://coveralls.io/github/iondrimba/SPATemplate?branch=master)

### Installation

```sh
$ git clone https://github.com/iondrimba/SPATemplate.git
$ cd SPATemplate
$ npm install

$ gulp
```
__TODO:__
 * Write more tests

__Features:__
 * Router system with pushstate (page.js)
 * Templating engine with (handlebars.js)
 * Module system CommonJs (browserify)

> In order to test if Pushstate is working
> you have to host it on apache so it can reads the .htaccess file

__Testing:__
 $ npm test

> In order to test if Pushstate is working
> you have to host it on apache so it can reads the .htaccess file

__Includes:__
  * BrowserSync
  * Browserify 
  * Sass
  * ESLint
  * Scss Lint (Requires Ruby and [scss-lint])
  * Imagemin (images optimization)
  * Uglify
  * Watch
  * Html-Min
  * Post-Css (autoprefixer)

__Gulp Tasks:__

 * gulp (default)
 * gulp deploy
 * gulp travis

__Structure:__

````bash
├── public/
│    ├─── js/  (.gitignored)
│    ├─── css/  (.gitignored)
│    ├─── images/
│    ├─── .htaccess
│    └─── index.html
│── src/
│    ├── scripts/
│    └── scss/
│    └── templates/
│── tasks/
│
│── .gitignore
│── .travis.yml
│── gulpfile.js
│── lint.yml
│── package.json
└── README.mdeslint
````

[scss-lint]:<https://github.com/brigade/scss-lint#installation>
