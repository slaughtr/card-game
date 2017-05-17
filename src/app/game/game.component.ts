//Angular services/modules
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

//services
import { CardService } from '../card.service'
import { GameService } from '../game.service'
import { PlayerService } from '../player.service'

//models
import { Card } from '../card.model'
import { Player } from '../player.model'
import { Game } from '../game.model'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [GameService]
})

export class GameComponent implements OnInit {
    playerId: string;
    playerToDisplay;

    constructor(
      private route: ActivatedRoute,
      private location: Location,
      private gameService: GameService,
      private playerService: PlayerService
    ) {}

    ngOnInit(){
      this.route.params.forEach((urlParameters) => {
        this.playerId = urlParameters['id'];
      });
      this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
    }

  //   ngOnInit() {
  //   this.route.params.forEach((urlParameters) => {
  //     this.memberId = urlParameters['id'];
  //   });
  //   this.memberToDisplay = this.memberService.getMemberById(this.memberId);
  // }
    // games: Game[];
  }
 // players: FirebaseListObservable<any[]>
 // player1: Player = this.players[0]
 // player2: Player = this.players[1]
 //
 // gameId: string
 //
 //  constructor(private cardService: CardService) { }
 //
 //
 //
  // ngOnInit() {}
 //    // this.players = this.dbService.getPlayersByGameId(this.gameId)
 //    //psuedo code, completely untested. Might need to be moved
 //    // this.players.forEach(player => {
 //    //   this.dbService.deck[this.dbService.player.selectedDeck].forEach(card => {
 //      // player.inDeck.push(new Card(card.name, card.health, card.attack, card.special))
 //    // })
 //    // })
 //  }
 //
 //  cardAttackCard(attacker: Card, target: Card) {
 //    if (target) {
 //      target.health -= attacker.attack
 //      this.checkWinCondition()
 //    } else {
 //      console.log("something went wrong in cardAttackCard")
 //    }
 //  }
 //
 //  cardAttackPlayer(attacker: Card, player) { //no player type here ATM to keep linter happy
 //    if (player) {
 //      player.health -= attacker.attack
 //      this.checkWinCondition()
 //    } else {
 //      console.log("something went wrong in cardAttackPlayer")
 //    }
 //  }
 //
 //  checkWinCondition() {
 //    //TODO: figure out how player.playedCards and player.lanes interact? Maybe lanes move to game object?
 //    if (this.player1.health <= 0) {
 //      //tell player they won/lost
 //    } else if (this.player2.health <=0) {
 //      //tell player they won/lost
 //    } else if (this.player1.inDeck.length < 1 && this.player1.hand.length < 1 && this.player1.playedCards.length < 1) {
 //      //tell player they won/lost
 //    } else if (this.player2.inDeck.length < 1 && this.player2.hand.length < 1 && this.player2.playedCards.length < 1) {
 //      //tell player they won/lost
 //    }
 //  }
 //
 //  advanceTurn() {
 //    this.game.turn ++
 //  }
