module.exports = function(grunt) {

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "dist/app.js": "app/**/*.js"
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
        }
    });

    require("load-grunt-tasks")(grunt);
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask("default", ["babel", "less", "watch"]);
    grunt.registerTask("test", ["babel", "mochaTest", "watch"]);
}