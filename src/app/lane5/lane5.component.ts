import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';

import { PlayCardService } from '../play-card.service'
import { PlayerService } from '../player.service'
import { CardService } from '../card.service'
import { Card } from '../card.model'

declare var jQuery: any;

@Component({
  selector: 'app-lane5',
  templateUrl: './lane5.component.html',
  styleUrls: ['./lane5.component.scss']
})

export class Lane5Component implements OnInit {
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
      if (typeof player.playedCards[4] === 'number') {
        console.log(typeof player.playedCards[4])
        this.cardService.getCardById(this.player.playedCards[4]).subscribe(card => {
          this.cardInLane = card
          console.log(this.cardInLane)
        })
      } else {
        this.cardInLane = player.playedCards[4]
      }
    })
  }

  pickLane() {
    if (jQuery('.lane1').hasClass('selected')) {
      jQuery('.lane1').removeClass('selected')
    } else {
      jQuery('.lane1').addClass('selected')
    }
    //TODO: add check if lane is occupied, might need to be in play card service/own service? Definitely needs some sort of communication between player.playedCards and player.lanes
    // if (this.playCardService.cardToPlay) {
    this.playCardService.playCardInLane5()
    //   this.cardInLane = this.playCardService.cardInLane1
    //   this.isThisLaneOccupied.next()
    // }
    // console.log('hi')
  }

}
