import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Game } from './game.model';

@Injectable()
export class GameService {
  game: FirebaseObjectObservable<any>;

  constructor(private database: AngularFireDatabase) {
    this.game = database.object('game');
  }

  getGame() {
    return this.game;
  }

  // addGame(newGame: Game){
  //   this.game.push(newGame);
  // }

  resetsGame(){
    let currentGame = this.getGame();
    currentGame.update({Pirate: "", Wizard: ""});
  }

  beThePirate(user){
    let currentGame = this.getGame();
    currentGame.update({Pirate: user.displayName});
  }

  beTheWizard(user){
    let currentGame = this.getGame();
    currentGame.update({Wizard: user.displayName});
  }

  // For V.2.0
  // getGameById(gameId: string) {
  //   return this.database.object('game/' + gameId);
  // }

}
