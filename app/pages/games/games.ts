import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GamePage } from '../game/game';
import { Game } from '../../interfaces/game-interface';

/*
  Generated class for the GamesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/games/games.html',
})
export class GamesPage {
  games: Game[];

  constructor(
    private _nav: NavController,
    private _params: NavParams
  ) {
    this.games = this._params.get('games');
  }

  goToGamePage(game: Game):void {
    this._nav.push(GamePage, { game: game })
  }
}
