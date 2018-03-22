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
      { id: uuid(), name: 'Piriquita', year: 2012, img: 1, description: 'Desc. for wine 1' },
      { id: uuid(), name: 'Mouchão', year: 2010, img: 2, description: 'Desc. for wine 2' },
      { id: uuid(), name: 'Rubrica', year: 2009, img: 3, description: 'Desc. for wine 3' },
      { id: uuid(), name: 'Confidencial', year: 2013, img: 4, description: 'Desc. for wine 4' },
    ];
  }

  getWines() {
    const deferred = this.$q.defer();
    deferred.resolve(this.mockedWines);

    return deferred.promise;
  }

  getById(id) {
    const deferred = this.$q.defer();

    const found = this.mockedWines.filter(w => w.id === id);
    if (found.length)
      deferred.resolve(found.pop());
    else
      deferred.reject([]);

    return deferred.promise;
  }

  searchWines(query) {
    const deferred = this.$q.defer();

    const results = this.mockedWines.filter(w => /query/i.test(w.name));
    console.log(results);
    deferred.resolve(results);

    return deferred.promise;

  }

}
