module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			dist:{
				options: {
					banner: 'sdfsdf\n'
				},
				build: {
						src: 'comverse/src/js/<%= pkg.name %>.js',
						dest: 'build/<%= pkg.name %>.min.js'
				}
			}
		}
	})
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.registerTask('default',['uglify:dist']);
};