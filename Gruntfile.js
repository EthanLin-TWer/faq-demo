module.exports = function(grunt) {

    grunt.initConfig({
        clean: {
            build: {
                src: ['dist/*']
            }
        },
        browserify: {
            dist: {
                options: {
                    "transform": [
                        [ "babelify", { "presets": ["es2015", "stage-1"] }]
                    ]
                },
                files: {
                    'dist/bundle.js': ['./app/**/*.js', '!./app/test/**/*.spec.js']
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
                files: [{
                    src: ['node_modules/angular/angular.js'],
                    dest: 'dist/vendor.js'
                }]
            },
            html: {
                files: [{
                    src: ['app/index.html'],
                    dest: 'dist/index.html'
                }]
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
                tasks: ['browserify']
            },
            unittest: {
                files: ['app/**/*.js'],
                tasks: ['mochaTest']
            },
            less: {
                files: ['app/**/*.less'],
                tasks: ['less']
            },
            html: {
                files: ['app/index.html'],
                tasks: ['copy:html']
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
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask("default", ["build"]);
    grunt.registerTask("build", ["clean", "browserify:dist", "less", "copy"]);
    grunt.registerTask("test",  ["mochaTest", "watch"]);
    grunt.registerTask("serve", ["build", "connect:server", "watch"]);
}
