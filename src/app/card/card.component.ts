import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { CardService } from '../card.service'
import { HandService } from '../hand.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() card

  constructor(private handService: HandService) { }

  ngOnInit() {

    // console.log(this.handService.playerHand)
    //
    // this.handService.playerHand.forEach(card => {
    //   this.playerHand.push(card)
    // })
  }

  ngAfterViewInit() {
    console.log(this.card)
  }


}
