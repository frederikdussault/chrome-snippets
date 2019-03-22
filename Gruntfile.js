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
            bookmarks: 'bookmarks'
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
            dist: ['<%= project.dist %>', '<%= project.temp %>'],
            bookmarks: ['<%= project.bookmarks %>']
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
                    '<%= project.dist %>/css/app.css': ['<%= project.src %>/scss/*.scss']
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

        /**
         * Compression
         */
        uglify: {
            options: {
                mangle: false,
                compress: {
                    drop_console: false
                }
            },
            bookmarks: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: '**/*.js',
                    dest: 'temp'
                }]
            }
        },

        /**
 * javascript: autoexec wrapper
 */
        wrap: {
            bookmarks: {
                expand: true,
                cwd: 'temp',
                src: '*.js',
                dest: 'bookmark',
                options: {
                    wrapper: ['javascript:', ''],
                    separator: ''
                }
            },
        },


    });

    /**
     *  convertir le code visé en une seule ligne et insérer dans un wrap javascript
     */

    // TODO: add minimizer to remove linefeeds and tabs (get all code on one line)
    // TODO: add a task to wrap the code in javascript:( [code line here] )



    grunt.registerTask('default', ['clean:dist', 'newer:eslint', 'watch']);
    grunt.registerTask('bookm', ['newer:eslint', 'uglify', 'wrap']);
};