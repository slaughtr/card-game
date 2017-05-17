import { Injectable } from '@angular/core';
import { Card } from './card.model'
import * as Rx from 'rx'

import { PlayerService } from './player.service'

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

  cardInLane1
  cardInLane2
  cardInLane3
  cardInLane4
  cardInLane5

  getPlayedCards() {
    var playedCards = this.playerService.getPlayerPlayedCards('1')
    playedCards.forEach(cards => {
        if (cards[0] !== 'empty') {
          this.isLane1Occupied = true
        } else {
          this.isLane1Occupied = false
        }
        if (cards[1] !== 'empty') {
          this.isLane2Occupied = true
        } else {
          this.isLane2Occupied = false
        }
        if (cards[2] !== 'empty') {
          this.isLane3Occupied = true
        } else {
          this.isLane3Occupied = false
        }
        if (cards[3] !== 'empty') {
          this.isLane4Occupied = true
        } else {
          this.isLane4Occupied = false
        }
        if (cards[4] !== 'empty') {
          this.isLane5Occupied = true
        } else {
          this.isLane5Occupied = false
        }
      })
    // })
  }

  constructor(private playerService: PlayerService) {}

  getLaneToPlay(card: Card) {
    this.cardSelectedButNotPlayed = true
    this.cardToPlay = card
    this.playCardClickListener.onNext(this.cardToPlay)
    // console.log(this.cardToPlay)
  }

  playCardInLane1() {
    this.cardSelectedButNotPlayed = false
    this.cardInLane1 = this.cardToPlay
    this.isLane1Occupied = true
    this.playerService.updatePlayerPlayedCards('1', 0, this.cardInLane1)
    this.playCardClickListener.onNext("played")
  }
  playCardInLane2() {
    this.cardSelectedButNotPlayed = false
    this.cardInLane2 = this.cardToPlay
    this.playerService.updatePlayerPlayedCards('1', 1, this.cardInLane2)
    this.isLane2Occupied = true
    this.playCardClickListener.onNext("played")
  }
  playCardInLane3() {
    this.cardSelectedButNotPlayed = false
    this.cardInLane3 = this.cardToPlay
    this.playerService.updatePlayerPlayedCards('1', 2, this.cardInLane3)
    this.isLane3Occupied = true
    this.playCardClickListener.onNext("played")
  }
  playCardInLane4() {
    this.cardSelectedButNotPlayed = false
    this.cardInLane4 = this.cardToPlay
    this.playerService.updatePlayerPlayedCards('1', 3, this.cardInLane4)
    this.isLane4Occupied = true
    this.playCardClickListener.onNext("played")
  }
  playCardInLane5() {
    this.cardSelectedButNotPlayed = false
    this.cardInLane5 = this.cardToPlay
    this.playerService.updatePlayerPlayedCards('1', 4, this.cardInLane5)
    this.isLane5Occupied = true
    this.playCardClickListener.onNext("played")
  }

}
