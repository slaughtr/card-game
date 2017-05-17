import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';

import { PlayCardService } from '../play-card.service'
import { PlayerService } from '../player.service'
import { CardService } from '../card.service'
import { Card } from '../card.model'

declare var jQuery: any;

@Component({
  selector: 'app-lane4',
  templateUrl: './lane4.component.html',
  styleUrls: ['./lane4.component.scss']
})

export class Lane4Component implements OnInit {
  @Input() lane: number
  cardInLane
  isThisLaneOccupied: Subject<void> = new Subject<void>();
  player

  constructor(private playCardService: PlayCardService, private playerService: PlayerService, private cardService: CardService) { }

  ngOnInit() {
    jQuery('.pickLaneButton').hide()
    if (!this.cardInLane) {
      jQuery('.pickLaneButton').show()
    } else {
      jQuery('.pickLaneButton').hide()
    }
    this.playerService.getPlayerById("1").subscribe((player)=> {
      this.player = player;
      if (typeof player.playedCards[3] === 'number') {
        console.log(typeof player.playedCards[3])
        this.cardService.getCardById(this.player.playedCards[3]).subscribe(card => {
          this.cardInLane = card
          console.log(this.cardInLane)
        })
      } else {
        this.cardInLane = player.playedCards[3]
      }
    })
  }

  pickLane() {
    if (jQuery('.lane1').hasClass('selected')) {
      jQuery('.lane1').removeClass('selected')
    } else {
      jQuery('.lane1').addClass('selected')
    }
    this.playCardService.playCardInLane4()
  }

}
