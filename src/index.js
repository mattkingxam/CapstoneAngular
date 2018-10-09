import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {CapstoneAngular} from 'capstone-angular';

@Component({
  selector: 'main'
})

@View({
  directives: [CapstoneAngular],
  template: `
    <capstone-angular></capstone-angular>
  `
})

class Main {

}

bootstrap(Main);
