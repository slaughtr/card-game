import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { BoardComponent } from './board/board.component';
import { HandComponent } from './hand/hand.component';
import { DeckComponent } from './deck/deck.component';
import { LaneComponent } from './lane/lane.component';
import { CardComponent } from './card/card.component';

import { masterFirebaseConfig } from './api-keys'
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}

import { routing } from './app.routing';
import { GameComponent } from './game/game.component';
import { DiscardComponent } from './discard/discard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PlayerDetailComponent,
    AboutComponent,
    HelpComponent,
    BoardComponent,
    HandComponent,
    DeckComponent,
    LaneComponent,
    CardComponent,
    GameComponent,
    DiscardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
