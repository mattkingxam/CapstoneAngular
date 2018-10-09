import {Component, View} from 'angular2/core';

@Component({
  selector: 'capstone-angular'
})

@View({
  templateUrl: 'capstone-angular.html'
})

export class CapstoneAngular {

  constructor() {
    console.info('CapstoneAngular Component Mounted Successfully');
  }

}
