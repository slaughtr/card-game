import { Component, OnInit } from '@angular/core';
import * as Rx from 'rx'
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';

//services
import { PlayerService } from '../player.service';
import { CardService } from '../card.service';
import { HandService } from '../hand.service'
import { AuthService } from '../providers/auth.service';
import { PlayCardService } from '../play-card.service'
import { GameService } from '../game.service'

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
  user;
  player;
  playerHand: any[] =[];
  hasCardBeenPlayed: Subject<void> = new Subject<void>();

  constructor(private playerService: PlayerService,private authService: AuthService, private cardService: CardService, private handService: HandService, private playCardService: PlayCardService, private gameService: GameService, private database: AngularFireDatabase) { }

  ngOnInit() {

    var activePirateHand = this.database.list('game/pirate/pirateHand');
    console.log("active hand"+activePirateHand);

    this.authService.getCurrentUser().subscribe(user=>{
      this.user = user;
      console.log('current user from handcomponent: '+ user);
    })
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
      // if ((this.gameService.playerSelectedDeck === 'pirate' && this.gameService.isPirateTurn) || (this.gameService.playerSelectedDeck === 'wizard' && this.gameService.isWizardTurn)) {
        this.playCardService.getLaneToPlay(card)
        this.playCardService.playCardClickListener.takeUntil(this.hasCardBeenPlayed).subscribe(result => {
          if (result === "played") {
            //I think this is causing the console errors about old2.dispose when it calls cleanUp?
            this.playerHand.splice(this.playerHand.indexOf(card), 1)
            this.cleanUp()
          }
        })
      // } else {
        // console.log('not your turn')
      // }
  }

  cleanUp() {
    //these make the selectCard function stop subscribing after a card is played using takeUntil
    this.hasCardBeenPlayed.next();
    this.hasCardBeenPlayed.complete();
  }
}
