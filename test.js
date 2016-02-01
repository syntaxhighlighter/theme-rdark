var fs = require('fs');
var sass = require('node-sass');

describe('theme-rdark', function() {
  it('compiles ok', function(done) {
    fs.readFile(`${__dirname}/theme.scss`, 'utf8', function(err, content) {
      var results = sass.renderSync({
        data: content,
        includePaths: [`${__dirname}/node_modules/@alexgorbatchev/theme-base`]
      });
      if(!results.css.length) throw new Error("Expecting results");
      done();
    });
  });
});