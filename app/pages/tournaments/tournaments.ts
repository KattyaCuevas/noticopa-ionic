import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GamesPage } from '../games/games';
import { TournamentsService } from '../../providers/tournaments-service/tournaments-service';
import { Tournament } from '../../interfaces/tournament-interface';
/*
  Generated class for the TournamentsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/tournaments/tournaments.html',
  providers: [TournamentsService]
})
export class TournamentsPage {
  tournaments: Tournament[];

  constructor(
    private _nav: NavController,
    private _tournamentService: TournamentsService
  ) {
    this._loadTournament();
  }

  goToGamesPage(tournament: Tournament):void {
    this._nav.push(GamesPage, { games: tournament.games });
  }

  private _loadTournament():void {
    this._tournamentService.getAllTournaments()
      .then(tournaments => this.tournaments = tournaments)
      .catch(error => {
        console.error(error);
      });
  }
}
