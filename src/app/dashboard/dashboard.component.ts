import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameComponent } from '../game/game.component';
import { GameService } from '../game.service';
import { Game } from '../game.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../providers/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  game: any;
  currentUser: any;
  piratePlayer: string ;
  wizardPlayer: string ;


  constructor(private router: Router, private gameService: GameService, private authService: AuthService) { }

  initGame(player) {
    this.router.navigate(['game', player.$key]);
    // isActive: boolean, hasStarted: boolean, player1:any, player2:any, turn: number
    // var newGame: Game = new Game(isActive, hasStarted, player1, player2, turn);
    // this.gameService.addGame(newGame);
    console.log("Init Game");
  }

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
  beThePirate() {
    this.gameService.beThePirate(this.currentUser);
      this.router.navigate(["board"]);
  }

  beTheWizard() {
    this.gameService.beTheWizard(this.currentUser);
      this.router.navigate(["board"]);
  }


  ngOnInit() {

    this.authService.getCurrentUser().subscribe(user =>  {
      this.currentUser = user;
    })

    this.gameService.resetsGame();

    let currentGame = this.gameService.getGame().subscribe((game)=> {
      this.game = game;
      console.log("dashboar", game);
        this.piratePlayer = game.Pirate.playerName;
        this.wizardPlayer = game.Wizard.playerName;
    });
  }
}
