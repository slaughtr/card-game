import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component'
import { PlayerDetailComponent } from './player-detail/player-detail.component'
import { AboutComponent } from './about/about.component'
import { HelpComponent } from './help/help.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardComponent } from './board/board.component';
import {AuthGuard} from './providers/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    //TODO: player info, anything useful here will necessitate adding properties to player object (IE wins/losses)
    path: 'player/:id',
    component: PlayerDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
  path:'dashboard',
  component: DashboardComponent,
  canActivate: [AuthGuard]
  },
  {
    path:'board',
    component: BoardComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
