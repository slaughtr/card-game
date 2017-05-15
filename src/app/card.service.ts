import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CardService {
  cards: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.cards = database.list('cards');
  }

  getCards() {
    return this.cards;
  }

  getCardById(cardId: string) {
    return this.database.object('cards/' + cardId);
  }

}
