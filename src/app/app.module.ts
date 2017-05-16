import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './providers/auth.guard';

//services, etc
import { CardService } from './card.service'
import { PlayerService } from './player.service'
import { HandService } from './hand.service'
import { PlayCardService } from './play-card.service'
import { routing } from './app.routing';

//components
import { MainPageComponent } from './main-page/main-page.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { BoardComponent } from './board/board.component';
import { HandComponent } from './hand/hand.component';
import { DeckComponent } from './deck/deck.component';
import { LaneComponent } from './lane/lane.component';
import { CardComponent } from './card/card.component';
import { GameComponent } from './game/game.component';
import { DiscardComponent } from './discard/discard.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//firebase
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth'
import {AuthService} from './providers/auth.service';
import { masterFirebaseConfig } from './api-keys';
import { Lane1Component } from './lane1/lane1.component';
import { Lane2Component } from './lane2/lane2.component';
import { Lane3Component } from './lane3/lane3.component';
import { Lane4Component } from './lane4/lane4.component';
import { Lane5Component } from './lane5/lane5.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

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
    DiscardComponent,
    DashboardComponent,
    Lane1Component,
    Lane2Component,
    Lane3Component,
    Lane4Component,
    Lane5Component
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
  providers: [AuthService, CardService, AuthGuard, PlayerService, HandService, PlayCardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
