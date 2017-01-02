module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	});
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('default', ['imagemin']);
};


imagemin: {
  dynamic: {
    files: [{
      expand: true,
      cwd: 'img/',
      src: ['**/*.{png,jpg,gif}'],
    }]
  }
}
