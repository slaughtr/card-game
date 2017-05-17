import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Game } from './game.model';
import { AuthService } from './providers/auth.service';


@Injectable()
export class GameService {
  game: FirebaseObjectObservable<any>;



  constructor(private database: AngularFireDatabase, private authService: AuthService) {
    this.game = database.object('game');
  }

  getGame() {
    return this.game;
  }

  // addGame(newGame: Game){
  //   this.game.push(newGame);
  // }

  getPirateDeck() {
    return this.database.object('deck/0');
  }

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

  getPlayers() {
    return this.database.object('/players')
  }

  // For V.2.0
  // getGameById(gameId: string) {
  //   return this.database.object('game/' + gameId);
  // }

}
