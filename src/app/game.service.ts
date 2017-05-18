import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Game } from './game.model';
import { AuthService } from './providers/auth.service';
import * as firebase from 'firebase/app';


@Injectable()
export class GameService {
  game: FirebaseObjectObservable<any>;
  pirateDeck: FirebaseObjectObservable<any>;
  wizardDeck: FirebaseObjectObservable<any>;



  constructor(private database: AngularFireDatabase, private authService: AuthService) {
    this.game = database.object('game');
    this.pirateDeck = database.object('game/pirate');
    this.wizardDeck = database.object('game/wizard');

  }

  getGame() {
    return this.game;
  }

  getWizardDeck() {
    return this.wizardDeck;
  }
  getPirateDeck2() {
    return this.pirateDeck;
  }

  // addGame(newGame: Game){
  //   this.game.push(newGame);
  // }

  getPirateDeck() {
    return this.database.object('deck/0');
  }

  resetsGame(){
    let wizardDeck = this.getWizardDeck();
    let pirateDeck = this.getPirateDeck2();
    wizardDeck.update({playerName: false});
    pirateDeck.update({playerName: false});
  }

  beThePirate(user){
    let pirateDeck = this.getPirateDeck2();
    pirateDeck.update({playerName: user.displayName});

  }

  beTheWizard(user){
    let wizardDeck = this.getWizardDeck();
    wizardDeck.update({playerName: user.displayName});
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

  shouldAdvanceTurn = false

  advanceTurn() {
    var currentNumTurns: number = 0
    this.shouldAdvanceTurn = true
    let currentGame = this.getGame()
    let currentTurns = this.getTurns()
    this.getTurnsOnce().then(value => {
      currentNumTurns = value.val().turns + 1
      console.log(currentNumTurns)
      currentGame.update({turns: currentNumTurns})

    })

      }

  // For V.2.0
  // getGameById(gameId: string) {
  //   return this.database.object('game/' + gameId);
  // }

}
