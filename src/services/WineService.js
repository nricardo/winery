// import external modules
import { v1 as uuid } from 'uuid';
import {Inject, Service, SetModule} from 'ng2now';

// define this module
SetModule('winery.wineService', []);

@Inject(['$q', '$http'])
@Service('wineService')
export class WineService
{
  constructor ($q, $http) {
    this.$q = $q;
    this.$http = $http;

    // this should be fetched from a external source (e.g. a backend that fetches data from a database)
    this.mockedWines = [
      { id: uuid(), name: 'Wine-1', year: 2002, description: 'Desc. for wine 1' },
      { id: uuid(), name: 'Wine-2', year: 2005, description: 'Desc. for wine 2' },
      { id: uuid(), name: 'Wine-3', year: 2009, description: 'Desc. for wine 3' },
      { id: uuid(), name: 'Wine-4', year: 2012, description: 'Desc. for wine 4' },
    ];
  }

  getWines() {
    const deferred = this.$q.defer();
    deferred.resolve(this.mockedWines);
  }

}
