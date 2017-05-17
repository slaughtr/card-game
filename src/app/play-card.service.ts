import { Injectable } from '@angular/core';
import { Card } from './card.model'
import * as Rx from 'rx'

@Injectable()
export class PlayCardService {
  cardToPlay: Card
  playCardClickListener = new Rx.BehaviorSubject(this.cardToPlay)

  getLaneToPlay(card: Card) {
    this.cardToPlay = card
    this.playCardClickListener.onNext(this.cardToPlay)
  }

  playCardInLane() {
    this.playCardClickListener.onNext("played")
  }

  constructor() { }

}
