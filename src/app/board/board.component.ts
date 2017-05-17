import { Component, OnInit, Output } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { PlayerService } from '../player.service'
import { PlayCardService } from '../play-card.service'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
  player;
  // lanes: number[];
  constructor(private playerService: PlayerService, private playCardService: PlayCardService) { }

  ngOnInit() {
    let currentPlayer = this.playerService.getPlayerById("1").subscribe((player)=> {
      this.player = player
    })

    // this.playerService.getPlayerById("1").subscribe(player => this.lanes = player.lanes)
    // this.playerService.getPlayerById("1").subscribe(player => player.lanes.map(lane => this.lanes.push(lane)))

    this.playCardService.getPlayedCards()

  }

}
