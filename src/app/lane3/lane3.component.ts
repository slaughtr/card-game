import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';

import { PlayCardService } from '../play-card.service'
import { Card } from '../card.model'

declare var jQuery: any;

@Component({
  selector: 'app-lane3',
  templateUrl: './lane3.component.html',
  styleUrls: ['./lane3.component.scss']
})

export class Lane3Component implements OnInit {
  @Input() lane: number;
  cardInLane: Card


  constructor(private playCardService: PlayCardService) { }

  ngOnInit() {
    jQuery('.pickLaneButton').hide()
    this.playCardService.playCardClickListener.subscribe(result => {
      // console.log(result)
      if (result) {
        if (result.hasOwnProperty('health')) {
          jQuery('.pickLaneButton').show()
        } else {
          jQuery('.pickLaneButton').hide()
        }
      }
    })

  }

  pickLane(lane) {
    if (jQuery('.lane1').hasClass('selected')) {
      jQuery('.lane1').removeClass('selected')
    } else {
      jQuery('.lane1').addClass('selected')
    }
    // jQuery('.pickLaneButton').hide()
    //TODO: add check if lane is occupied, might need to be in play card service/own service? Definitely needs some sort of communication between player.playedCards and player.lanes
    this.playCardService.playCardInLane()
  }

}
