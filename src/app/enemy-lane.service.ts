import { Injectable } from '@angular/core';
import { Card } from './card.model'
import * as Rx from 'rx'

import { PlayerService } from './player.service'

@Injectable()
export class EnemyLaneService {
  isEnemyLane1Occupied: boolean = false
  isEnemyLane2Occupied: boolean = false
  isEnemyLane3Occupied: boolean = false
  isEnemyLane4Occupied: boolean = false
  isEnemyLane5Occupied: boolean = false

  cardInEnemyLane1
  cardInEnemyLane2
  cardInEnemyLane3
  cardInEnemyLane4
  cardInEnemyLane5

  getEnemyLanes() {
    this.playerService.getPlayerPlayedCards('0').subscribe(cards => {
      if (cards[0] !== 'empty') {
        this.isEnemyLane1Occupied = true
      } else {
        this.isEnemyLane1Occupied = false
      }
      if (cards[1] !== 'empty') {
        this.isEnemyLane2Occupied = true
      } else {
        this.isEnemyLane2Occupied = false
      }
      if (cards[2] !== 'empty') {
        this.isEnemyLane3Occupied = true
      } else {
        this.isEnemyLane3Occupied = false
      }
      if (cards[3] !== 'empty') {
        this.isEnemyLane4Occupied = true
      } else {
        this.isEnemyLane4Occupied = false
      }
      if (cards[4] !== 'empty') {
        this.isEnemyLane5Occupied = true
      } else {
        this.isEnemyLane5Occupied = false
      }
    })
  }

  constructor(private playerService: PlayerService) {}

}
