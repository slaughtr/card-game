import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';

import { PlayCardService } from '../play-card.service'
import { PlayerService } from '../player.service'
import { CardService } from '../card.service'
import { Card } from '../card.model'

declare var jQuery: any;

@Component({
  selector: 'app-lane2',
  templateUrl: './lane2.component.html',
  styleUrls: ['./lane2.component.scss']
})

export class Lane2Component implements OnInit {
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
      if (typeof player.playedCards[1] === 'number') {
        console.log(typeof player.playedCards[1])
        this.cardService.getCardById(this.player.playedCards[1]).subscribe(card => {
          this.cardInLane = card
          console.log(this.cardInLane)
        })
      } else {
        this.cardInLane = player.playedCards[1]
      }
    })
  }

  pickLane() {
    if (jQuery('.lane1').hasClass('selected')) {
      jQuery('.lane1').removeClass('selected')
    } else {
      jQuery('.lane1').addClass('selected')
    }
    this.playCardService.playCardInLane2()
  }

}
