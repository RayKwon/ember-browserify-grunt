var config = function(name) {
  return require('./grunt-tasks/' + name + '.js');
};

module.exports = function (grunt) {
  require('matchdep')
    .filterDev('grunt-*')
    .forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: config('watch'),
    connect: config('connect'),
    emberTemplates: config('ember-templates'),    
    browserify: config('browserify'),   
    uglify: config('uglify')    
  });

  grunt.registerTask('build', ['browserify', 'emberTemplates:dist', 'uglify']);
  grunt.registerTask('server', ['browserify', 'emberTemplates:dev', 'connect', 'watch']);
};