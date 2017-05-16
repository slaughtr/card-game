import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css'],
  providers: [PlayerService]
})


export class DeckComponent implements OnInit {
player;

  constructor(private playerService: PlayerService, private authService: AuthService) { }

  ngOnInit() {
    let currentPlayer = this.playerService.getPlayerById("1").subscribe((player)=> {
      this.player = player;
      // console.log(player);
    });
  }

}
