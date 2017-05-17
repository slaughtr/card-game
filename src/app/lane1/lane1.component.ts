import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';

import { PlayCardService } from '../play-card.service'
import { PlayerService } from '../player.service'
import { CardService } from '../card.service'
import { Card } from '../card.model'

declare var jQuery: any;

@Component({
  selector: 'app-lane1',
  templateUrl: './lane1.component.html',
  styleUrls: ['./lane1.component.scss']
})

export class Lane1Component implements OnInit {
  @Input() lane: number
  cardInLane: Card
  isThisLaneOccupied: Subject<void> = new Subject<void>();
  player

  constructor(private playCardService: PlayCardService, private playerService: PlayerService, private cardService: CardService) { }

  ngOnInit() {
    jQuery('.pickLaneButton').hide()

        if (!this.cardInLane) {
            jQuery('.pickLaneButton').show()
            // console.log(this.cardInLane)
        } else {
          jQuery('.pickLaneButton').hide()
        }


      this.playerService.getPlayerById("1").subscribe((player)=> {
        this.player = player;
        this.cardService.getCardById(player.playedCards[0]).subscribe(card => {
          this.cardInLane = card
      })
    });
  }

  pickLane(lane) {
    if (jQuery('.lane1').hasClass('selected')) {
      jQuery('.lane1').removeClass('selected')
    } else {
      jQuery('.lane1').addClass('selected')
    }
    //TODO: add check if lane is occupied, might need to be in play card service/own service? Definitely needs some sort of communication between player.playedCards and player.lanes
    // if (this.playCardService.cardToPlay) {
    //   this.playCardService.playCardInLane1()
    //   this.cardInLane = this.playCardService.cardInLane1
    //   this.isThisLaneOccupied.next()
    // }
  }

}
