System.register("index", ["angular2/core", "angular2/platform/browser", "capstone-angular"], function($__export) {
  "use strict";
  var Component,
      View,
      bootstrap,
      CapstoneAngular,
      Main;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }, function($__m) {
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      CapstoneAngular = $__m.CapstoneAngular;
    }],
    execute: function() {
      Main = function() {
        function Main() {}
        return ($traceurRuntime.createClass)(Main, {}, {});
      }();
      Object.defineProperty(Main, "annotations", {get: function() {
          return [new Component({selector: 'main'}), new View({
            directives: [CapstoneAngular],
            template: "\n    <capstone-angular></capstone-angular>\n  "
          })];
        }});
      bootstrap(Main);
    }
  };
});
