//Angular services/modules
import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

//services
import { CardService } from '../card.service'

//models
import { Card } from '../card.model'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
 players: FirebaseListObservable<any[]>
 decks: FirebaseListObservable<any[]>
 games: FirebaseListObservable<any[]>

  constructor(private cardService: CardService) { }



  ngOnInit() {
    //psuedo code, completely untested. Might need to be moved
    // this.dbService.players.forEach(player => {
    //   this.dbService.deck[this.dbService.player.selectedDeck].forEach(card => {
      // player.inDeck.push(new Card(card.name, card.health, card.attack, card.special))
    // })
    // })

  }

  cardAttackCard(attacker: Card, target: Card) {
    if (target) {
      target.health -= attacker.attack
    } else {
      console.log("something went wrong in cardAttackCard")
    }
  }

  cardAttackPlayer(attacker: Card, player: Player) {

  }




}
