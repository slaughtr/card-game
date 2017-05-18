import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { GameService } from '../game.service';
import { PlayerService } from '../player.service';
import { Card } from '../card.model';

@Component({
  selector: 'app-discard',
  templateUrl: './discard.component.html',
  styleUrls: ['./discard.component.css'],
  providers: [GameService, PlayerService]
})

export class DiscardComponent implements OnInit {
  cards: FirebaseListObservable<any[]>;
  discard;

  constructor(private database: AngularFireDatabase, private gameService: GameService, private playerService: PlayerService) {  }

  ngOnInit() {
    this.gameService.getDiscard().subscribe((discard) => {
      this.discard = discard;
    })
  }

  addToDiscard() {
    var testCard: Card = new Card("Pirate Boatswain", 10, 5, "boatswaining");
    this.gameService.addToDiscard(testCard);
  }

  removeTest() {
    console.log("removeTest()");
    var playerId: string = "0";
    this.playerService.removePlayerPlayedCard();
  }

}
