
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {AuthService} from './providers/auth.service';
import {Router} from '@angular/router';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Carrrd Game';
  user: any = null;

  constructor (private authService: AuthService, private router: Router){}

  ngOnInit(){
    this.authService.getCurrentUser().subscribe(user=>{
      console.log("get user on init of App", user);
      if (user === null){
        this.router.navigate(['login']);
      } else {
        this.router.navigate(['']);
      }
    })
  }

  goToPlayerDetailPage(currentPlayer) {
    this.router.navigate(['player', currentPlayer.$key])
  }
}
