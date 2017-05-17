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
  cardInLane: Card
  isThisLaneOccupied: Subject<void> = new Subject<void>();
  player


  constructor(private playCardService: PlayCardService, private playerService: PlayerService, private cardService: CardService) { }

  ngOnInit() {
    jQuery('.pickLaneButton').hide()
    //   if (this.playCardService.cardSelectedButNotPlayed) {
    //
    //     jQuery('.pickLaneButton').show()
    //
    //   // console.log(this.cardInLane)
    // } else {
    //   jQuery('.pickLaneButton').hide()
    // }

    this.playerService.getPlayerById("1").subscribe((player)=> {
      this.player = player;
      this.cardService.getCardById(player.playedCards[1]).subscribe(card => {
        if (card.$value !== null) {
          this.cardInLane = card

        }
        // console.log(card)
      })
    });

  }

  pickLane(lane) {
    if (jQuery('.lane1').hasClass('selected')) {
      jQuery('.lane1').removeClass('selected')
    } else {
      jQuery('.lane1').addClass('selected')
    }
    if (this.playCardService.cardToPlay) {
      this.playCardService.playCardInLane2()
      this.cardInLane = this.playCardService.cardInLane2
      this.isThisLaneOccupied.next()
      var cardInArray = this.playerService.getPlayerById('1')
    }
  }
}
