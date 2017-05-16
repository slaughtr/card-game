import { Component, OnInit } from '@angular/core';

//services
import { PlayerService } from '../player.service';
import { CardService } from '../card.service';
import { HandService } from '../hand.service'
import { PlayCardService } from '../play-card.service'

//firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

//models
import { Card } from '../card.model'

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})

export class HandComponent implements OnInit {
  player;
  playerHand: any[] =[];

  constructor(private playerService: PlayerService, private cardService: CardService, private handService: HandService, private playCardService: PlayCardService) { }

  ngOnInit() {
    let currentPlayer = this.playerService.getPlayerById("1").subscribe((player)=> {
      this.player = player;
      this.player.hand.forEach(card => {
        this.cardService.getCardById(card).subscribe(card => {
          this.playerHand.push(card);
        })
      })
    });
  }

  selectCard(card: Card) {
    this.playCardService.getLaneToPlay(card)
    this.playCardService.playCardClickListener.subscribe(result => {
      if (result === "played") {
        this.playerHand.splice(this.playerHand.indexOf(card), 1)
        console.log('spliced card from playerhand')
      }
    })
    // console.log(this.playCardService.cardToPlay)
  }


}
