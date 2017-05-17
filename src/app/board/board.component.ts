import { Component, OnInit, Output } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { PlayerService } from '../player.service'
import { PlayCardService } from '../play-card.service'
import { EnemyLaneService } from '../enemy-lane.service'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
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

}
