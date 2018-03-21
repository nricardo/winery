import {Component, SetModule } from 'ng2now';

import 'modules/wines';

// define this module
SetModule('winery', ['ui.router', 'ngMaterial', 'wines'])
.run($rootScope => {
  $rootScope.$on('$stateChangeStart', (event, state) => {
    console.log(event, state);
  });
});

@Component({
  selector: 'winery',
  template: '<ui-view />',
  style: require('./winery.scss'),
})
export class Winery {
  constructor () {
    console.info('Wine cellar starting...');
  }
}