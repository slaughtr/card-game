import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from "@angular/router";

import { CardService } from "./card.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CardService]
})

export class AppComponent {
  title = 'Carrrd Game';
  cards: FirebaseListObservable<any[]>;

  constructor(private router: Router, private cardService: CardService) {}

  ngOnInit() {
    this.cards = this.cardService.getCards();
  }

  goToPlayerDetailPage(currentPlayer) {
    this.router.navigate(['player', currentPlayer.$key])
  }
}
