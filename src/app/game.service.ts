import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Game } from './game.model';
import { AuthService } from './providers/auth.service';
import * as firebase from 'firebase/app';


@Injectable()
export class GameService {
  game: FirebaseObjectObservable<any>;
  playerSelectedDeck: string


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
    this.playerSelectedDeck = 'pirate'
  }

  beTheWizard(user){
    let currentGame = this.getGame();
    currentGame.update({Wizard: user.displayName});
    this.playerSelectedDeck = 'wizard'
  }

  getDiscard() {
    return this.database.list('game/Discard/cards');
  }

  addToDiscard(cardToDiscard) {
    let currentDiscard = this.getDiscard();
    currentDiscard.push(cardToDiscard);
  }

  getPlayers() {
    return this.database.object('/players')
  }

  getTurnsOnce() {
    return firebase.database().ref('/game/').once('value');
  }

  getTurns() {
    return this.database.object('/game/turns/')
  }

  isPirateTurn = true
  isWizardTurn = false
  currentNumTurns: number = 0

  advanceTurn() {
    // console.log('wiz: ' + this.isWizardTurn)
    // console.log('pir: ' + this.isPirateTurn)
    let currentGame = this.getGame()
    let currentTurns = this.getTurns()
    this.getTurnsOnce().then(value => {
      this.currentNumTurns = value.val().turns + 1
      console.log(this.currentNumTurns)
      currentGame.update({turns: this.currentNumTurns})
        this.isPirateTurn = !this.isPirateTurn
        this.isWizardTurn = !this.isWizardTurn
      })
  }

  // For V.2.0
  // getGameById(gameId: string) {
  //   return this.database.object('game/' + gameId);
  // }

}
