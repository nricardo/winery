import { Component, Inject, State, SetModule } from 'ng2now';

SetModule('winery.wine', []).name;

@Component({
  selector: 'wine',
  providers: ['$injector'],
  style: require('./wine.scss'),
  template: require('./wine.html'),
})
@State({
  name: 'wine',
  url: '/wine/:id',
})
class Wine
{
  constructor ($injector) {
    this.$params = $injector.get('$stateParams');
    this.wineService = $injector.get('wineService');

    // load wine info
    const id = this.$params['id'];
    id && this.wineService.getById(id).then(wine => this.wine = wine);
  }

}