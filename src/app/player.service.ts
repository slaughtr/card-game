import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import * as firebase from 'firebase/app';

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
    return this.database.object('game/pirate');
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

  savePirateDeck(deck){
    console.log("update pirate hand: "+deck);
    var pirateDeckUpdate = this.database.object('game/pirate');
    pirateDeckUpdate.update({pirateDeck:deck});
  }

  savePirateHand(hand){
    var pirateHandSave2 = this.database.object('game/pirate');
    pirateHandSave2.update({pirateHand:hand});
    console.log("update pirate hand: "+hand);
  }

  saveWizardDeck(deck){
    var playerDeckUpdate = this.database.object('game/wizard');
    playerDeckUpdate.update({wizardDeck:deck});
  }

  saveWizardHand(hand){
    console.log("update wizard hand: "+hand);
    var wizardHandSave = this.database.object('game/wizard');
    wizardHandSave.update({wizardHand:hand});
  }

  updatePirateDeck(pDeck){
    console.log("update pirate deck"+pDeck);
    var pirateDeckUpdate = this.database.object('game/pirate');
    console.log("pirate deck update"+pirateDeckUpdate);
    pirateDeckUpdate.update({pirateDeck:pDeck});
  }

  updateWizardDeck(deck){
    console.log("update wizard deck"+deck);
    var wizardDeckUpdate = this.database.object('game/wizard');
    wizardDeckUpdate.update({wizardDeck:deck});
  }

  updateHand(){
    console.log('players from player service'+this.players);
  }

  savePlayerDeck(deck) {
    let pirateDeck = this.getPirateDeck();
    pirateDeck.update({Deck: deck});
  }

  getPlayerPlayedCards(playerId: string) {
    return this.database.object('players/' + playerId + '/playedCards/');
  }

  getEnemyPlayerPlayedCards(playerId: string) {
    return this.database.object('players/' + playerId + '/playedCards/')
  }

  getEnemyPlayerPlayedCardByIndexOnce(playerId: string, index: number) {
    console.log('index in getEnemyPlayerPlayedCardByIndexOnce'+index)
    return firebase.database().ref('/players/'+playerId+'/playedCards/'+index).once('value');
  }

  getEnemyPlayerPlayedCardByIndex(playerId: string, index: number) {
      return this.database.object('players/' + playerId + '/playedCards/' + index)
    }

  getPlayerPlayedCardById(playerId: string, cardId: string) {
    return this.database.object('players/' + playerId + '/playedCards/' + cardId);
  }

  removePlayerPlayedCard(playerId: string, cardId: string) {
    var cardToRemove = this.getPlayerPlayedCardById(playerId, cardId);
    cardToRemove.remove();
  }

  updatePlayerPlayedCards(playerId: string, index: number, card: Card) {
    var indexToUpdate = index
    var cardToUpdate = this.getPlayerPlayedCards(playerId)
    cardToUpdate.update({ [indexToUpdate] :  {
      name: card.name,
      attack: card.attack,
      health: card.health,
      special: card.special
    } })
  }

}
