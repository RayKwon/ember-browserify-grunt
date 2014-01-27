## Hope this project template guide you to using [Browserify](http://browserify.org/), [Grunt](gruntjs.com) and [Ember.js](emberjs.com) together

### How to run GistCamp on your local machine

In CLI:

	npm install
	bower install
	grunt server


Then open `http://localhost:8080` in your browser.

`grunt server` command will monitor your javacript files and handlebars templates then it will refresh your browser automatically everytime you change your code.

For production build you can execute `grunt build` command and will generate bundle.js file which is uglified and concatenated javascript files and handlebars template files into one big file.


### TODO
- Unit test template with mocha, chai and sinon


## License
Released under the MIT license.