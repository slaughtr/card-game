import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { AuthService } from '../providers/auth.service';
import { DeckService } from '../deck.service';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css'],
  providers: [PlayerService, DeckService]
})


export class DeckComponent implements OnInit {
  decks: FirebaseListObservable<any[]>;
  player;
  decksToDisplay;
  pirateDeck;
  pirateCards;
  pirateShuffled;
  wizardDeck;
  wizardCards;
  wizardShuffled;

  constructor(private playerService: PlayerService, private deckService: DeckService, private database: AngularFireDatabase) { }

  ngOnInit() {
    let currentPlayer = this.playerService.getPlayerById("1").subscribe((player)=> {
      this.player = player;
    });

    this.deckService.getDecks().subscribe(decks => {
      this.pirateDeck = decks[0];
      this.wizardDeck = decks[1];
      this.pirateCards = this.pirateDeck.cards;
      this.wizardCards = this.wizardDeck.cards;

      this.pirateShuffled = this.shuffleDeck(this.pirateDeck);
      this.wizardShuffled = this.shuffleDeck(this.wizardDeck);
      console.log("end of subscribe");
    });

  }

  shuffleDeck(deckToShuffle){
    var initDeck = deckToShuffle.cards;
    var loopLength = deckToShuffle.cards.length;
    var outputDeck = new Array();
    var randomCard;
    for(var i = 0; i < loopLength; i++){
      var randomIndex = Math.floor(Math.random()*initDeck.length);
      randomCard = initDeck[randomIndex];
      outputDeck.push(randomCard);
      initDeck.splice(randomIndex,1);
    }
    return outputDeck;
  }

}
