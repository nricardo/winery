import { Component, State, SetModule } from 'ng2now';

SetModule('winery.wines', []);

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
    this.$state = $injector.get('$state');
    this.wineService = $injector.get('wineService');

    this.load();
  }

  load() {
    // load list of wines
    this.wineService.getWines().then(wines => this.wines = wines);
  }

  searchWines(query) {
    query = query || '';
    console.log('Searching...', query);
    return this.wineService.searchWines(query).then(wines => this.wines = wines);
  }

  handleSearchChange(query) {
    if (query === '') this.wines = [];
  }

  showDetails(id) {
    this.$state.go('wine', {id: id});
  }
}
