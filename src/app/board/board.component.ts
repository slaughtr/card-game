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
  wizardPlayer;
  piratePlayer;
  currentUser: any;
  game: any;
  playerIsPirate: boolean;
  pirateDeck: any = [];

  constructor(private playerService: PlayerService, private playCardService: PlayCardService, private enemyLaneService: EnemyLaneService, private authService: AuthService, private gameService: GameService) { }

  ngOnInit() {
    // let currentPlayer = this.playerService.getPlayerById("1").subscribe((player)=> {
    //   this.player = player
    // })
    //this function loads cards already played on init. Afterwards, players should already be subscribed to the played cards, so not necessary afterwards?
    this.playCardService.getPlayedCards()
    this.enemyLaneService.getEnemyLanes()
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
    this.gameService.advanceTurn()
  }

}
