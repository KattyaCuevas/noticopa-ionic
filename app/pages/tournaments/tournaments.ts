import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GamesPage } from '../games/games';

/*
  Generated class for the TournamentsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
interface Tournament {
  id: number,
  name: string,
  description?: string,
  slug: string,
  image_url: string
}
@Component({
  templateUrl: 'build/pages/tournaments/tournaments.html',
})
export class TournamentsPage {
  tournaments: Tournament[];
  constructor(private _nav: NavController) {
    this.tournaments = [
      {
        id: 1,
        name: 'Copa América',
        slug: 'copa-america',
        image_url: 'dedede.png'
      },
      {
        id: 2,
        name: 'Copa América',
        slug: 'copa-america',
        image_url: 'dedede.png'
      }
    ];
  }
  addTournament():void{
    this.tournaments.push({
        id: 1,
        name: 'Copa América',
        slug: 'copa-america',
        image_url: 'dedede.png'
      });
  }
  goToGamesPage(tournament: Tournament):void {
    this._nav.push(GamesPage, {slug: tournament.slug});
  }
}
