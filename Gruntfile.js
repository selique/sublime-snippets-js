module.exports = function(grunt) {
	grunt.initConfig({
		bump: {
			options: {
				files: ['package.json'],
				commit: true,
				commitMessage: 'Release v%VERSION%',
				commitFiles: ['package.json'],
				createTag: true,
				tagName: '%VERSION%',
				tagMessage: '',
				push: true,
				pushTo: 'origin'
			}
		},

		lintspaces: {
			all: {
				src: ['*'],
				options: {
					newline: false,
					trailingspaces: true,
					indentation: 'tabs',
					spaces: 4
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-bump');
	grunt.loadNpmTasks('grunt-lintspaces');

	grunt.registerTask('default', ['lintspaces']);
};