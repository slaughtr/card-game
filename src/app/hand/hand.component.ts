import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { CardService } from '../card.service';
import { HandService } from '../hand.service'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
 
export class HandComponent implements OnInit {
  player;
  // playerHand: FirebaseListObservable<any[]>;
  playerHand: any[] =[];

  constructor(private playerService: PlayerService, private cardService: CardService, private handService: HandService) { }

  ngOnInit() {
    let currentPlayer = this.playerService.getPlayerById("1").subscribe((player)=> {
      this.player = player;
      console.log("player in hand.comp",player);
    //  this.player.hand
      this.player.hand.forEach(card => {
      this.cardService.getCardById(card).subscribe(card => {
        this.playerHand.push(card);
      })
      })
    });
    console.log("playerHand", this.playerHand);
  }

}
