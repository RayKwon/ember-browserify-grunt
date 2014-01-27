module.exports = {
  dist: {
    files: {
      'js/main.min.js': ['js/main.js'],
    },
    options: {
      debug: true,
      
      shim: {
        jquery: {
          path: 'bower_components/jquery/jquery.js',
          exports: '$'
        },
        handlebars: {
          path: 'bower_components/handlebars/handlebars.js',
          exports: 'Handlebars'
        },
        ember: {
          path: 'bower_components/ember/ember.js',
          exports: 'Ember',
          depends: {
            handlebars: 'Handlebars',   
            jquery: '$' 
          }
        }
      },

      noParse: 
      [
        // 'bower_components/**/*.js'
        'bower_components/jquery/jquery.js', 
        'bower_components/handlebars/handlebars.js', 
        'bower_components/ember/ember.js'
      ]
    }
  }
};


