import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Card } from './card.model'

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
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

  getPlayerPlayedCards(playerId: string) {
    return this.database.object('players/' + playerId + '/playedCards')
  }

  updatePlayerPlayedCards(playerId: string, index: number, card: Card) {
    var cardToUpdate = this.getPlayerPlayedCards(playerId)
    cardToUpdate.update({ index : card })
  }

}
