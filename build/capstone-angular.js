System.register("capstone-angular", ["angular2/core"], function($__export) {
  "use strict";
  var Component,
      View,
      CapstoneAngular;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }],
    execute: function() {
      CapstoneAngular = function() {
        function CapstoneAngular() {
          console.info('CapstoneAngular Component Mounted Successfully');
        }
        return ($traceurRuntime.createClass)(CapstoneAngular, {}, {});
      }();
      $__export("CapstoneAngular", CapstoneAngular);
      Object.defineProperty(CapstoneAngular, "annotations", {get: function() {
          return [new Component({selector: 'capstone-angular'}), new View({templateUrl: 'capstone-angular.html'})];
        }});
    }
  };
});
