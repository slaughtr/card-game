import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CardService {
  cards: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.cards = database.list('card');
  }

  getCards() {
    return this.cards;
  }

  getCardById(cardId: string) {
    let card = this.database.object('card/' + cardId);
    // console.log(card);
    // if (cardId === 'empty') {
    //   return null;
    // } else {
      return card;

    // }
  }

}
