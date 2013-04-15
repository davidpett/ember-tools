var exec = require("child_process").exec;
var fs = require("fs");
var rm = require("rimraf");
var helpers = require("../support/helpers");

describe("create directory", function() {

  afterEach(function(done) {
    rm("./test-app", function() {
      fs.unlink('.ember', done);
    });
  });

  beforeEach(function(done){
    var testAppDir = __dirname + "/test-app";
    fs.rmdir(testAppDir, function(err){
      if (err) throw err;
      fs.mkdir(testAppDir, done);
    });
  });

  it("should add a bunch of files and directories", function(done) {
    exec("./bin/ember create -d test-app", function() {
      helpers.assertPathsExist([
        ".ember",
        "test-app/controllers",
        "test-app/models",
        "test-app/routes",
        "test-app/templates",
        "test-app/views",
        "test-app/vendor",
        "test-app/index.html",
<<<<<<< HEAD
        "test-app/app.js", 
        "test-app/store.js", 
=======
        "test-app/app.js",
        "test-app/store.js",
>>>>>>> upstream/master
        "test-app/routes.js",
        "test-app/templates/application.handlebars",
        "test-app/templates/index.handlebars",
        "test-app/vendor/ember-data.js",
        "test-app/vendor/ember.js",
        "test-app/vendor/handlebars.js",
        "test-app/vendor/jquery.js",
        "test-app/vendor/localstorage_adapter.js"
      ], done);
    });
  });
});

describe("create in cwd", function() {
  afterEach(function(done) {
    rm("./test-app", done);
  });

  it("scaffolds in the CWD if no directory passed", function(done){
    exec("mkdir test-app && cd test-app && ../bin/ember create -d", function() {
      helpers.assertPathsExist([
<<<<<<< HEAD
        "./.ember",
        "./controllers",
        "./models",
        "./routes",
        "./templates",
        "./views",
        "./vendor",
        "./index.html",
        "./app.js", 
        "./store.js", 
        "./routes.js",
        "./templates/application.handlebars",
        "./templates/index.handlebars",
        "./vendor/ember-data.js",
        "./vendor/ember.js",
        "./vendor/handlebars.js",
        "./vendor/jquery.js",
        "./vendor/localstorage_adapter.js"
=======
        "test-app/.ember",
        "test-app/controllers",
        "test-app/models",
        "test-app/routes",
        "test-app/templates",
        "test-app/views",
        "test-app/vendor",
        "test-app/index.html",
        "test-app/app.js",
        "test-app/store.js",
        "test-app/routes.js",
        "test-app/templates/application.handlebars",
        "test-app/templates/index.handlebars",
        "test-app/vendor/ember-data.js",
        "test-app/vendor/ember.js",
        "test-app/vendor/handlebars.js",
        "test-app/vendor/jquery.js",
        "test-app/vendor/localstorage_adapter.js"
>>>>>>> upstream/master
      ], done);
    });
  });
});


