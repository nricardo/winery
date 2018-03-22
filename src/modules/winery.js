import {Component, SetModule } from 'ng2now';

import './wines';
import './wines/wine';

import '../services/WineService';

// define this module
SetModule('winery', ['ui.router', 'ngMaterial', 'winery.wine', 'winery.wines', 'winery.wineService'])
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