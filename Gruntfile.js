module.exports = function(grunt) {

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/app.js': 'app/**/*.js'
                }
            }
        },
        less: {
            development: {
                files: {
                    'dist/main.css': 'app/**/*.less'
                }
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        src: ['app/index.html'],
                        dest: 'dist/index.html'
                    },
                    {
                        src: ['node_modules/angular/angular.min.js'],
                        dest: 'dist/vendor.js'
                    }
                ]
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    require: ['babel-register']
                },
                src: ['app/test/unit/**/*.spec.js']
            }
        },
        watch: {
            javascript: {
                files: ['app/**/*.js'],
                tasks: ['babel', 'mochaTest']
            },
            less: {
                files: ['app/**/*.less'],
                tasks: ['less']
            }
        },
        connect: {
            server: {
                options: {
                    port: 8086,
                    base: 'dist'
                }
            }
        }
    });

    require("load-grunt-tasks")(grunt);
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask("default", ["build"]);
    grunt.registerTask("build", ["babel", "less", "copy:dist"]);
    grunt.registerTask("test", ["babel", "mochaTest", "watch"]);
    grunt.registerTask("serve", ["build", "connect:server", "watch"]);
}