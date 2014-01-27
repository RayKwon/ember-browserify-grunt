var $ = require('jquery');
var handlebars = require('handlebars');
var markdown = require('markdown').markdown;

require('./app');
require('./files_module');


Ember.Handlebars.helper('markdown', function(value){
  if (value)
    return new Handlebars.SafeString(markdown.toHTML(value));
  return '';
});