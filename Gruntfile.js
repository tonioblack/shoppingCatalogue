module.exports = function (grunt) {
    grunt.initConfig({
        clean: ["mobileApp/www/**"],
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: '**',
                        dest: 'mobileApp/www/'
                    }

                ]
            },
            fonts: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/libs/fonts',
                        src: '**',
                        dest: 'src/fonts/'
                    }
                ]
            }
        },
        bower: {
            dev: {
                dest: 'src/libs'
            }
        },
        less: {
            dev: {
                options: {
                    paths: ["bower_components/"]
                },
                files: {
                    "src/css/app.css": "src/css/app.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bower');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['clean', 'copy']);

};