import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth'
import { masterFirebaseConfig } from './api-keys';
import {AuthService} from './providers/auth.service';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';


import { LoginPageComponent } from './login-page/login-page.component';

import { MainPageComponent } from './main-page/main-page.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { BoardComponent } from './board/board.component';
import { HandComponent } from './hand/hand.component';
import { DeckComponent } from './deck/deck.component';
import { LaneComponent } from './lane/lane.component';
import { CardComponent } from './card/card.component';
import { routing } from './app.routing';
import { GameComponent } from './game/game.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DiscardComponent } from './discard/discard.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
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
    DiscardComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routing,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
