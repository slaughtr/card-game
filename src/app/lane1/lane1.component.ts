import { Component, OnInit, Input, AfterContentInit, AfterViewInit, Renderer2 } from '@angular/core';
import { PlayCardService } from '../play-card.service'
import { Card } from '../card.model'

declare var jQuery: any;

@Component({
  selector: 'app-lane1',
  templateUrl: './lane1.component.html',
  styleUrls: ['./lane1.component.scss']
})

export class Lane1Component implements OnInit {
  @Input() lane: number;
  currentLane
  laneClass: string
  cardInLane: Card


  constructor(private renderer: Renderer2, private playCardService: PlayCardService) { }

  ngOnInit() {
    jQuery('.pickLaneButton').hide()
    this.playCardService.playCardClickListener.subscribe(result => {
      // console.log(result)
      if (result !== undefined) {
        jQuery('.pickLaneButton').show()
      } else if (result === undefined) {
        jQuery('.pickLaneButton').hide()
      }
    })

  }

  pickLane(lane) {
    if (jQuery('.lane1').hasClass('selected')) {
      jQuery('.lane1').removeClass('selected')
    } else {
      jQuery('.lane1').addClass('selected')
    }
    jQuery('.pickLaneButton').hide()

    this.playCardService.playCardInLane()
  }

  ngAfterViewInit() {

  }

}
