var App = require('./app');

var files = [{
  id: 'rails-is-omakase',
  title: 'Rails is Omakase',
  author: 'rrr',
  contents: 'There are lots of a la carte software environments in this wor'
}, {
  id: 'why-ruby',
  title: 'Why Ruby?',
  author: 'CodingHorror',
  contents: 'I have been a Microsoft developer for decades now. I weaned myself on various flavors of home computer Microsoft Basic, and I got my first paid programming gigs in Microsoft FoxPro, Microsoft Access, and Microsoft Visual Basic. I have seen the future of programming, my friends, and it is terrible CRUD apps running on Wintel boxes!'
}];

files.forEach(function(file){
  files[file.id] = file;
});

App.FilesRoute = Ember.Route.extend({
  model: function(){
    return files;
  }
});


App.FilesDetailRoute = Ember.Route.extend({
  model: function(params) {
    return files[params.file_id];
  }
});

App.FilesEditRoute = Ember.Route.extend({
  model: function(params) {
    var file = files[params.file_id];
    return file;
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});

App.FilesNewRoute = Ember.Route.extend({
  model: function() {
    return {};
  }
});

App.FilesNewController = Ember.Controller.extend({
  actions: {    
    addFile: function() {
      files.pushObject({
        id: this.get('title'),
        title: this.get('title'),
        author: this.get('author'),
        contents: this.get('contents')
      });
    }
  }
});

App.FilesEditController = Ember.ObjectController.extend({
  company: 'GE Healthcare',
  actions: {    
    editFile: function(file) {
      files.pushObject({    // TODO change to update object not add
        id: this.get('title'),
        title: this.get('title'),
        author: this.get('author'),
        contents: this.get('contents')
      });
    }
  }
});

module.exports = App;