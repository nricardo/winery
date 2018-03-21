import { Component, State, SetModule } from 'ng2now';

import '../../services/WineService';

SetModule('wines', ['winery.WineService']);

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
    this.wineService = $injector.get('wineService');

    this.load();
  }

  load() {
    // load list of wines
    this.wineService.getWines().then(wines => this.wines = wines);
  }

  searchWines(query) {
    query = query || '';
    return this.wineService.searchWines(query).then(wines => this.wines = wines);
  }
}
