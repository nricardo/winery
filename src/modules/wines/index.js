import { Component, State, SetModule } from 'ng2now';

import { v1 as uuid } from 'uuid';

SetModule('wines', []);

@Component({
  selector: 'wines',
  providers: ['$injector'],
  style: require('./wines.scss'),
  template: require('./wines.html'),
})
@State({
  name: 'wines',
  url: '/wines',
  otherwise: true,
})
export class Wines {
  constructor($injector) {
    this.$http = $injector.get('$http');
    this.$timeout = $injector.get('$timeout');
    this.$window = $injector.get('$window');

    this.load();
  }

  load() {
    // load list of wines
    this.wines = [
      { id: uuid(), name: 'Wine-1', year: 2002 },
      { id: uuid(), name: 'Wine-2', year: 2005 },
      { id: uuid(), name: 'Wine-3', year: 2009 },
      { id: uuid(), name: 'Wine-4', year: 2012 },
    ];
  }
}