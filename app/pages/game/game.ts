import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Game } from '../../interfaces/game-interface';

/*
  Generated class for the GamePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/game/game.html',
})
export class GamePage {
  game: Game;

  constructor(
    private _params: NavParams,
    private _nav: NavController
  ) {
    this.game = this._params.get('game');
  }
}
