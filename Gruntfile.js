module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			sass: {
				files: 'assets/*/*.{scss,sass}',
				tasks: ['sass:compressed'],
			},
			js: {
				files: ['assets/js/*.js'],
				tasks: ['uglify']
			}
		},
		sass: {
            compressed: {
                options: {
                    style: 'compressed'
                },

                files: {
                    'assets/devices.min.css': 'assets/scss/devices.scss',
                    'assets/style.css': 'assets/scss/style.scss',
                }
            },
        },
		uglify: {
			all: {
				files: {
					'assets/main.min.js': [
					'assets/js/*.js'
					]
				}
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['sass:compressed', 'uglify' , 'watch']);
};