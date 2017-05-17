import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { AuthService } from '../providers/auth.service';
import { DeckService } from '../deck.service';
import { HandService } from '../hand.service';
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

  constructor(private playerService: PlayerService, private handService: HandService, private deckService: DeckService, private database: AngularFireDatabase) { }

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

  drawCard(playerObj){
    if(playerObj.type === "wizard"){
      console.log("wizard deck after draw: "+this.wizardShuffled);
      console.log("draw from the wizard deck: "+this.wizardShuffled[0]);
      this.handService.putCardInHand(this.wizardShuffled[0]);
      this.wizardShuffled.splice(0,1);
      console.log("wizard deck after draw: "+this.wizardShuffled);

    }
    console.log(playerObj.type);
    console.log(playerObj.name+" Deck: "+playerObj.inDeck);
    console.log(playerObj.name+" Hand: "+playerObj.hand);
    console.log("next card to draw: "+playerObj.inDeck[0]+" from player"+playerObj.name);
    var nextCardToDraw = playerObj.inDeck[0];
    console.log("deckToDrawFrom"+playerObj.name);

  }

}
