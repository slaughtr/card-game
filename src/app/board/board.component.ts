import { Component, OnInit, Output } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { PlayerService } from '../player.service'

import { GameService } from '../game.service';
import { Game } from '../game.model';
import { AuthService } from '../providers/auth.service';

import { PlayCardService } from '../play-card.service'
import { EnemyLaneService } from '../enemy-lane.service'


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
  player;
  wizard: boolean;
  pirate;
  currentUser: any;
  game: any;
  playerIsPirate: boolean;
  pirateDeck: any = [];

  constructor(private playerService: PlayerService, private playCardService: PlayCardService, private enemyLaneService: EnemyLaneService, private authService: AuthService, private gameService: GameService) { }

  ngOnInit() {
    // let currentPlayer = this.playerService.getPlayerById("1").subscribe((player)=> {
    //   this.player = player
    // })

    let currentGame = this.gameService.getGame().subscribe((game => {
      console.log(game);
      this.wizard = game.Wizard;
      this.pirate = game.Pirate;
    }))
    //this function loads cards already played on init. then, players should already be subscribed to the played cards, so not necessary afterwards?

    this.playCardService.getPlayedCards()
    this.enemyLaneService.getEnemyLanes()
    // console.log('wiz: ' + this.gameService.isWizardTurn)
    // console.log('pir: ' + this.gameService.isPirateTurn)
  }

  getPirateDeck() {
    this.pirateDeck = []
    this.gameService.getPirateDeck().subscribe(deck => {
      deck.cards.forEach(card=> {
        this.pirateDeck.push(card);
      });
    })
    this.playerService.savePlayerDeck(this.pirateDeck);
  }

  advanceTurnSender() {
    if (this.gameService.playerSelectedDeck === 'pirate' && this.gameService.isPirateTurn) {
      this.gameService.advanceTurn()
    } else if (this.gameService.playerSelectedDeck === 'wizard' && this.gameService.isWizardTurn) {
      this.gameService.advanceTurn()
    } else {
      console.log('something went wrong in board.component advanceTurnSender')
      console.log('or maybe its not your turn')
    }
  }

}
