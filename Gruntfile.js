module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['app.js', 'Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
		},
		copy: {
			dist: {
				expand: true,
				cwd: 'src/',
				src: '**',
				dest: 'dist/'
			}
		},
		clean: {
			dist: ['dist/']
		},
		execute: {
			app: {
				src: ["app.js"]
			}
		},
		open : {
	    dev : {
	      path: 'https://localhost.intuit.com:34212'
	    }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-execute');

	grunt.registerTask('default', ['clean:dist', 'jshint', 'copy:dist']);
	grunt.registerTask('dev', ['jshint', 'open:dev', 'execute:app']);
};
