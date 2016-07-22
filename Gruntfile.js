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
        watch: {
            javascript: {
                files: ['app/**/*.js'],
                tasks: ['babel']
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

    grunt.registerTask("default", ["babel", "less", "watch"]);
}