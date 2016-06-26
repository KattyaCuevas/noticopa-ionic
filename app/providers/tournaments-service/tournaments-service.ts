import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the TournamentsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TournamentsService {
  path: string;

  constructor(private _http: Http) {
    this.path = 'http://noticopa-api.herokuapp.com/api/tournaments';
  }

  getAllTournaments():Promise<any> {
    return this._http.get(this.path)
               .map(response => response.json())
               .toPromise();
  }
}

