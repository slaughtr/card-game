import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DeckService {
  decks: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.decks = database.list('deck');
  }

  getDecks() {
    return this.decks;
  }

  getDeckById(deckId: string) {
    return this.database.object('decks/' + deckId);
  }

}
