import { Component } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Carrrd Game';

  constructor(private router: Router) {}

  goToPlayerDetailPage(currentPlayer) {
    this.router.navigate(['player', currentPlayer.$key])
  }
}
