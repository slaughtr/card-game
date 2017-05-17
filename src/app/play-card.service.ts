import { Injectable } from '@angular/core';
import { Card } from './card.model'
import * as Rx from 'rx'

@Injectable()
export class PlayCardService {
  cardToPlay: Card
  playCardClickListener = new Rx.BehaviorSubject(this.cardToPlay)
  cardSelectedButNotPlayed: boolean = false
  isLane1Occupied: boolean = false
  isLane2Occupied: boolean = false
  isLane3Occupied: boolean = false
  isLane4Occupied: boolean = false
  isLane5Occupied: boolean = false

  cardInLane1: Card
  cardInLane2: Card
  cardInLane3: Card
  cardInLane4: Card
  cardInLane5: Card

  getLaneToPlay(card: Card) {
    this.cardSelectedButNotPlayed = true
    this.cardToPlay = card
    this.playCardClickListener.onNext(this.cardToPlay)
  }

  playCardInLane1() {
    this.cardSelectedButNotPlayed = false
    this.cardInLane1 = this.cardToPlay
    this.isLane1Occupied = true
    this.playCardClickListener.onNext("played")
  }
  playCardInLane2() {
    this.cardSelectedButNotPlayed = false
    this.cardInLane2 = this.cardToPlay
    console.log(this.cardInLane2)
    this.isLane2Occupied = true
    this.playCardClickListener.onNext("played")
  }
  playCardInLane3() {
    this.cardSelectedButNotPlayed = false
    this.cardInLane3 = this.cardToPlay
    this.isLane3Occupied = true
    this.playCardClickListener.onNext("played")
  }
  playCardInLane4() {
    this.cardSelectedButNotPlayed = false
    this.cardInLane4 = this.cardToPlay
    this.isLane4Occupied = true
    this.playCardClickListener.onNext("played")
  }
  playCardInLane5() {
    this.cardSelectedButNotPlayed = false
    this.cardInLane5 = this.cardToPlay
    this.isLane5Occupied = true
    this.playCardClickListener.onNext("played")
  }

  playCardInLane() {
    this.playCardClickListener.onNext("played")
  }

  constructor() { }

}
