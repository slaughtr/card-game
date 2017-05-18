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

  constructor(private playerService: PlayerService,private authService: AuthService, private handService: HandService, private deckService: DeckService, private database: AngularFireDatabase) {

  }

  ngOnInit() {
    let currentPlayer = this.authService.getCurrentUser().subscribe((player)=> {
      console.log(player);
      // this.player = player;
    });
    // this.playerService.clearPirateHand();

    this.deckService.getDecks().subscribe(decks => {

      this.pirateDeck = decks[0];
      this.wizardDeck = decks[1];
      this.pirateCards = this.pirateDeck.cards;
      this.wizardCards = this.wizardDeck.cards;

      this.pirateShuffled = this.shuffleDeck(this.pirateDeck);
      this.wizardShuffled = this.shuffleDeck(this.wizardDeck);
      this.playerService.savePirateDeck(this.pirateShuffled);
      this.playerService.saveWizardDeck(this.wizardShuffled);
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

  dealHands(){
    var pirateDeltHand = new Array();
    var pDeck;
    var currentPirateDeck = this.deckService.getPirateDeck().subscribe(deck =>{
      console.log("deck"+deck);
      for(var i = 0; i < 3; i++){
        pirateDeltHand.push(deck[i]);
      }
      deck.splice(0,3);
      this.playerService.savePirateHand(pirateDeltHand);
      this.playerService.updatePirateDeck(deck);
      currentPirateDeck.unsubscribe();
    });

    var currentWizardDeck = this.deckService.getWizardDeck().subscribe(wDeck =>{
      var wizardDeltHand = new Array();
      for(var i = 0; i < 3; i++){
        wizardDeltHand.push(wDeck[i]);
      }
      wDeck.splice(0,3);
      this.playerService.updateWizardDeck(wDeck);
      this.playerService.saveWizardHand(wizardDeltHand);
    });

  }

  drawCard(playerObj){
    console.log("draw a card");
    var currentPirateHand = this.database.list('game/pirate/pirateHand');
    var updatePirateDeck = this.database.list('game/pirate/pirateDeck');
    var currentPirateDeck = this.deckService.getPirateDeck().subscribe(deck =>{
      console.log("current priate"+deck[0]);
      currentPirateHand.push(deck[0]);
      deck.splice(0,1);
      this.playerService.updatePirateDeck(deck);
      currentPirateDeck.unsubscribe();
    });
    var currentPlayer = this.authService.getCurrentUser().subscribe(user => {
      // console.log("current player: "+user.displayName);
      console.log("current player: "+user);
      console.log("pirate Deck"+currentPirateDeck);
      console.log("pirate hand"+currentPirateHand);
    });


    // if(playerObj.type === "wizard"){
    //   this.handService.putCardInHand(this.wizardShuffled[0]);
    //
    //   this.wizardShuffled.splice(0,1);
    // } else if(playerObj.type === "pirate"){
    //   this.handService.putCardInHand(this.wizardShuffled[0]);
    //   this.wizardShuffled.splice(0,1);
    // }
  }

}
