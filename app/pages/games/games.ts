import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the GamesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/games/games.html',
})
export class GamesPage {
  slug: string;
  constructor(
    private _nav: NavController,
    private _params: NavParams
  ) {
    this.slug = this._params.get('slug');
  }
}
