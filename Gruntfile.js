module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			sass: {
				files: 'assets/*/*.{scss,sass}',
				tasks: ['sass:dist', 'postcss:dist'],
			},
			js: {
				files: ['assets/js/*.js'],
				tasks: ['uglify']
			}
		},
		sass: {
			dist: {
				options: {
					outputStyle: 'compressed',
					sourceMap: false,
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
		postcss: {
			options: {
				map: false,
				processors: [
					require('autoprefixer')
				]
			},
			dist: {
				src: 'assets/*.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-postcss');

	grunt.registerTask('default', ['sass:dist', 'postcss:dist', 'uglify' , 'watch']);
};