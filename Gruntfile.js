module.exports = function(grunt) {

    grunt.initConfig({
        "babel": {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "dist/app.js": "app/**/*.js"
                }
            }
        },
        "watch": {
            files: ['app/**/*.js'],
            tasks: ['babel']
        }
    });

    require("load-grunt-tasks")(grunt);
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("default", ["babel", "watch"]);
}