//Angular services/modules
import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

//models
import { Card } from '../card.model'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {


  constructor() { }

  

  ngOnInit() {
    //psuedo code, completely untested. Might need to be moved
    // this.dbService.players.forEach(player => {
    //   this.dbService.deck[this.dbService.player.selectedDeck].forEach(card => {
      // player.inDeck.push(new Card(card.name, card.health, card.attack, card.special))
    // })
    // })

  }

}
