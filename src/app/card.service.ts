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
    let test = this.database.object('card/' + cardId);
    console.log(test);
    return test;
  }

}
