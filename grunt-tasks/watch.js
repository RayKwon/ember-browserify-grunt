var LIVERELOAD_PORT = 35729;

module.exports = {
  options: {
    spawn: false,
    livereload: LIVERELOAD_PORT
  },
  js: {
    tasks: ['browserify'],
    files: ['js/**/*.js', '!js/app.min.js']
  },
  hbs: {
    tasks: ['emberTemplates:dev'],
    files: ['templates/**/*.hbs']
  }
};