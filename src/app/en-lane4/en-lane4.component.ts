import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { EnemyLaneService } from '../enemy-lane.service'
import { PlayerService } from '../player.service'
import { CardService } from '../card.service'
import { Card } from '../card.model'

declare var jQuery: any;

@Component({
  selector: 'app-en-lane4',
  templateUrl: './en-lane4.component.html',
  styleUrls: ['./en-lane4.component.scss']
})

export class EnLane4Component implements OnInit {
  cardInLane

  constructor(private enemyLaneService: EnemyLaneService, private playerService: PlayerService, private cardService: CardService) { }

  ngOnInit() {
    this.playerService.getPlayerById("0").subscribe((player)=> {
      if (typeof player.playedCards[3] === 'number') {
        // console.log(typeof player.playedCards[3])
        this.cardService.getCardById(player.playedCards[3]).subscribe(card => {
          this.cardInLane = card
          // console.log(this.cardInLane)
        })
      } else {
        this.cardInLane = player.playedCards[3]
        // console.log(this.cardInLane)
      }
    })
  }

}
