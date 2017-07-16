// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  "use strict";
  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),


    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed',
        },
        files: {                         // Dictionary of files
          'dist/assets/css/style.css': 'src/assets/css/style.scss'                    
        }
      }
    },

    bake: {
        build: {
            options: {},
            files: {
              "dist/index.html": "src/index.html"
            }
        }
    },
    copy: {
      files: {
        cwd: 'src/assets/js',  // set working folder / root to copy
        src: '**/*',           // copy all files and subfolders
        dest: 'dist/assets/js/',    // destination folder
        expand: true           // required when using cwd
      },
      css: {
        cwd: 'src/assets/css',
        src: ['foundation.min.css', 'font-awesome.min.css'],
        dest: 'dist/assets/css/',
        expand: true
      },
      fonts: {
        cwd: 'src/assets/fonts',
        src: '**/*',
        dest: 'dist/assets/fonts/',
        expand: true
      },
      img: {
        cwd: 'src/assets/img',
        src: '**/*',
        dest: 'dist/assets/img/',
        expand: true
      },
      php: {
        cwd: 'src/assets/phpmailer',
        src: '**/*',
        dest: 'dist/assets/phpmailer/',
        expand: true
      }
    },

    watch: { 
      sass: {
        files: ['src/assets/css/*.scss'],
        tasks: ['sass'],
        options : { nospawn : true, relative:true }
      },
      bake: {
        files: ['src/**/*.html', 'src/*.html', 'includes/*.html'],
        tasks: ['bake']
      },
      copy: {
        files: ['src/assets/js/*.js', 'src/assets/js/vendor/*.js', 'src/assets/css/foundation.min.css', 'src/assets/img/*.jpg', 'src/assets/img/*.png', 'src/assets/img/*.svg', 'src/assets/phpmailer/*.php'],
        tasks: ['copy']
      }
    },

    touch: {
      target: ['*.html']
    }
     

  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bake');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-touch');
};
