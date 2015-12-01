# Browserify + Gulp Project Template

[![Travis build status](https://travis-ci.org/iondrimba/Browserify-Gulp-Sample.svg?branch=master)](https://travis-ci.org/iondrimba/Browserify-Gulp-Sample)

### Installation

```sh
$ git clone https://github.com/iondrimba/Browserify-Gulp-Sample.git
$ cd Browserify-Gulp-Sample
$ npm install

$ gulp
```

__Includes:__
  * LiveReload
  * CommonJS
  * Javascript
  * CSS
  * Sass
  * ESLint
  * Scss Lint (Requires Ruby and [scss-lint])
  * Imagemin (images optimization)
  * Uglify

__Structure:__

````bash
├── public
│    ├─── scripts
│    ├─── styles
│    └─── index.html
│    
│── src
│    ├── scripts
│    └── styles
│
├── tasks
│   ├── browserify.js
│   ├── eslint.js
│   ├── clean.js
│   ├── sass.js
│   ├── uglify.js
│   ├── watch.js│   
│   └── webserver.js
│
└── gulpfile.json
````

[scss-lint]:<https://github.com/brigade/scss-lint#installation>
