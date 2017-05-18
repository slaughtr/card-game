import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

import { Card } from './card.model'

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;
  game: FirebaseObjectObservable<any>;


  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
    this.game = database.object('game');
  }

  getPirateDeck() {
    return this.database.object('game/Pirate');
  }

  getGame() {
    return this.game;
  }
  getPlayers() {
    return this.players;
  }

  getPlayerById(playerId: string) {
    return this.database.object('players/' + playerId);
  }

  getPlayerDeck(playerId: string) {
    return this.database.object('players/' + playerId + '/inDeck');
  }

  updateDeck(){

  }

  updateHand(){
    
  }

  savePlayerDeck(deck) {
    console.log('ding')
    let pirateDeck = this.getPirateDeck();
    console.log("pirateDeck",pirateDeck);


      pirateDeck.update({Deck: deck});
    }


  // checkForPlayers() {
  //   return this.game.object('game');
  // }

  getPlayerPlayedCards(playerId: string) {
    return this.database.object('players/' + playerId + '/playedCards/')
  }




  updatePlayerPlayedCards(playerId: string, index: number, card: Card) {
    var indexToUpdate = index
    console.log(playerId, index, card)
    var cardToUpdate = this.getPlayerPlayedCards(playerId)
    cardToUpdate.update({ [indexToUpdate] :  {
      name: card.name,
      attack: card.attack,
      health: card.health,
      special: card.special
    } })
  }

}
