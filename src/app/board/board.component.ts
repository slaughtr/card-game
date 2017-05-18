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
  enemyPlayer;
  wizard: boolean = false;
  pirate: boolean = false;
  currentUser: any;
  game: any;
  playerIsPirate: boolean;
  pirateDeck: any = [];

  constructor(private playerService: PlayerService, private playCardService: PlayCardService, private enemyLaneService: EnemyLaneService, private authService: AuthService, private gameService: GameService) { }

  ngOnInit() {
    this.playerService.getPlayerById("1").subscribe((player)=> {
      this.player = player
    })
    this.playerService.getPlayerById("0").subscribe((player)=> {
      this.enemyPlayer = player
    })
    //this function loads cards already played on init. Afterwards, players should already be subscribed to the played cards, so not necessary afterwards?

    let currentGame = this.gameService.getGame().subscribe((game => {
      console.log(game);
      this.wizard = game.wizard.playerName;
      this.pirate = game.pirate.playerName;
    }))


    this.playCardService.getPlayedCards()
    this.enemyLaneService.getEnemyLanes()
    // console.log('wiz: ' + this.gameService.isWizardTurn)
    // console.log('pir: ' + this.gameService.isPirateTurn)
    //below for testing
    this.gameService.playerSelectedDeck = 'wizard'
    this.gameService.isWizardTurn = true
    // console.log(this.gameService.playerSelectedDeck)
    // console.log(this.gameService.isWizardTurn)
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

  endOfTurnAttackRound() {
    var indexToAttack: number = 0
    this.playerService.getPlayerPlayedCards("1").subscribe((cards)=> {
      cards.forEach(card => {
        var attackingCardAttack = card.attack
        this.playerService.getEnemyPlayerPlayedCardByIndexOnce('0', indexToAttack).then(value => {
          let currentIndex = indexToAttack
          indexToAttack++
          if (value.val() !== null) {
            let enemyCard = this.playerService.getEnemyPlayerPlayedCardByIndex('0', currentIndex)
            let enemyCardHealth = value.val().health - attackingCardAttack
            enemyCard.update({health: enemyCardHealth})
            if (enemyCardHealth < 1) {
              this.playerService.removePlayerPlayedCard('0', currentIndex.toString())
              console.log('think ya killed it?')
            }
          } else {
            // console.log('either an error or attacking enemy mothership')
            console.log('enemyPlayer health before attack: ' + this.enemyPlayer.health)
            this.enemyPlayer.health - attackingCardAttack
            console.log('enemyPlayer health after attack: ' + this.enemyPlayer.health)
          }
        })
      })


    })

  }



  advanceTurnSender() {
    if ((this.gameService.playerSelectedDeck === 'pirate' && this.gameService.isPirateTurn) || (this.gameService.playerSelectedDeck === 'wizard' && this.gameService.isWizardTurn)) {
      this.endOfTurnAttackRound()
      this.gameService.advanceTurn()
    } else {
      console.log('something went wrong in board.component advanceTurnSender')
      console.log('or maybe its not your turn')
    }
  }

}
