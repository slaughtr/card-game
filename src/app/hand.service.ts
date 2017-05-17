import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { CardService } from './card.service'
import { AuthService } from './providers/auth.service'
import { HandComponent } from './hand/hand.component'

@Injectable()
export class HandService {

  constructor(private cardService: CardService, private authService: AuthService) {}

  getCardById(cardId: string) {
    return this.cardService.getCardById(cardId)
  }

  putCardInHand(cardObj){
    console.log("put this card in your hand"+cardObj);
  }
}
