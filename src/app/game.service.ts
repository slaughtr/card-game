import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Game } from './game.model';

@Injectable()
export class GameService {
  games: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.games = database.list('game');
  }

  getGames() {
    return this.games;
  }

  addGame(newGame: Game){
    this.games.push(newGame);
  }

  // For V.2.0
  // getGameById(gameId: string) {
  //   return this.database.object('game/' + gameId);
  // }

}
