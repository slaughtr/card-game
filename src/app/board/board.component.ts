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

  currentUser: any;
  game: any;
  playerIsPirate: boolean;
  pirateDeck: any = [];

  lanes: number[];
  constructor(private playerService: PlayerService, private authService: AuthService, private gameService: GameService) { }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user =>  {
      this.currentUser = user;

        });
      this.gameService.getGame().subscribe((game)=> {
        this.game = game;
        if (this.game.Pirate === this.currentUser.displayName){
          this.playerIsPirate = true;
        }
      });
    this.playerService.getPlayerById("1").subscribe(player => this.lanes = player.lanes)
    // this.playerService.getPlayerById("1").subscribe(player => player.lanes.map(lane => this.lanes.push(lane)))

  player;

  constructor(private playerService: PlayerService, private playCardService: PlayCardService, private enemyLaneService: EnemyLaneService) { }
  wizardPlayer;
  piratePlayer;



  ngOnInit() {
    let currentPlayer = this.playerService.getPlayerById("1").subscribe((player)=> {
      this.player = player
    }
  )
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



}
