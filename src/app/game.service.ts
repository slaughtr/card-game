import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GameService {
  games: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.games = database.list('game');
  }

  getGames() {
    return this.games;
  }

  getGameById(gameId: string) {
    return this.database.object('games/' + gameId);
  }

}
