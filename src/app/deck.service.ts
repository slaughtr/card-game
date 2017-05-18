import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class DeckService {
  decks: FirebaseListObservable<any[]>;
  sWizardDeck: FirebaseListObservable<any[]>;
  sPirateDeck: FirebaseListObservable<any[]>;
  pirateHand: FirebaseListObservable<any[]>;
  wizardHand: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.decks = database.list('deck');
    this.sPirateDeck = this.database.list('/game/pirateDeck');
    this.sWizardDeck = this.database.list('/game/wizardDeck');
    this.pirateHand = this.database.list('/game/pirateDeck')
    this.wizardHand = this.database.list('/game/wizardDeck')
  }

  shuffleDeck(){

  }

  getDecks() {
    return this.decks;
  }

  getWizardDeck(){
    return this.sWizardDeck;
  }
  getPirateDeck(){
    return this.sPirateDeck;
  }

  getDeckById(deckId: string) {
    return this.database.object('decks/' + deckId);
  }

}
