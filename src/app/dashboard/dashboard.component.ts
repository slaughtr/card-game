import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameComponent } from '../game/game.component';
import { GameService } from '../game.service';
import { Game } from '../game.model';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  game: any[];

  constructor(private router: Router, private gameService: GameService) { }

  // initGame(player) {
  //   this.router.navigate(['gametime', player.$key]);
  //   isActive: boolean, hasStarted: boolean, player1:any, player2:any, turn: number
  //   var newGame: Game = new Game(isActive, hasStarted, player1, player2, turn);
  //   this.gameService.addGame(newGame);
  //   console.log("Init Game");
  //
  //
  //   console.log(player)
  // }

  ngOnInit() {
    let currentGame = this.gameService.getGames().subscribe((game)=> {
      this.game = game;
      console.log(game)
    });
  }
dd
}
