module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        /**  
        * Get package meta data  
        */
        pkg: grunt.file.readJSON('package.json'),

        /**  
        * Set project variables
        */
        project: {
            src: 'src',
            temp: 'temp',
            dist: 'dist',
        },

        /** 
         * manage version tagging
         */
        version: {
            maj: {
                options: {
                    release: 'major'
                },
                src: ['package.json', 'Gruntfile.js']
            },
            pat: {
                options: {
                    release: 'patch'
                },
                src: ['package.json', 'Gruntfile.js']
            },
            min: {
                options: {
                    release: 'minor'
                },
                src: ['package.json', 'Gruntfile.js']
            },
        },
          
        /**  
        * clean
        */
        clean: {
            dev: ['<%= project.dist %>', '<%= project.temp %>'],
            temp: ['<%= project.temp %>']
        },

        /**  
        * Sass  
        */
        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    '<%= project.dist %>/css/app.css': ['<%= project.src %>/scss/app.scss']
                }
            },
        },

        /**  
        * eslint
        */
        eslint: {
            target: [
                'package.json', 'Gruntfile.js', '<%= project.src %>/**/*.js'
            ]
        },

        /**  
        * concat files
        */
        concat: {
            options: {
                separator: `;

/* ---------- CONCAT SEPARATOR -------------- */

`,
            },
            /* js: {
                src: [
                    '<%= project.src %>/js/views/*.js',
                ],
                dest: '<%= project.temp %>/js/main.js',
            }, */
        },

        /**  
        * Copy files to dist
        */
        copy: {
            front: {
                files: [
                    // makes all src relative to cwd
                    //{expand: true, cwd: '<%= project.src %>/scss/', src: ['*.css'], dest: '<%= project.dist %>/css/'},
                ],
            },
        },

        /**  
        * watches
        */
        watch: {
            scripts: {
                files: ['<%= eslint.target %>'],
                tasks: ['clean:temp', 'eslint'],
            },
        },
    });

    /**
     *  convertir le code visé en une seule ligne et insérer dans un wrap javascript
     */

    // TODO: create a task function 
    // TODO: add minimizer to remove linefeeds and tabs (get all code on one line)
    // TODO: add a task to wrap the code in javascript:( [code line here] )



    grunt.registerTask('default', ['clean', 'newer:eslint', 'watch']);
};