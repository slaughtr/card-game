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
      cards.forEach(card => {
        console.log(card)
      })
    })
  }

  constructor(private playerService: PlayerService) {}

}
