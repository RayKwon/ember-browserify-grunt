var Ember = require('ember');

var App = Ember.Application.create();

App.Router.map(function(){
  this.resource('files', function(){
    this.route('detail', { path: '/:file_id' });
    this.route('edit', { path: '/edit/:file_id' });
    this.route('new', { path: '/new'});
  });    
});

App.ApplicationController = Ember.Controller.extend({
  init: function() {
    this.set('name', 'Kwon Hyojung');
  },

  actions: {
    saveName: function(value) {
      localStorage.appName = value;
    }
  }
});

module.exports = App;