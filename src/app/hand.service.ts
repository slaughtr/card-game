import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { CardService } from './card.service'

@Injectable()
export class HandService {

  constructor(private cardService: CardService) {}

  getCardById(cardId: string) {
    return this.cardService.getCardById(cardId)
  }

  putCardInHand(cardObj){
    // player.hand.push(cardObj);
    console.log("put this card in your hand"+cardObj);
  }
}
