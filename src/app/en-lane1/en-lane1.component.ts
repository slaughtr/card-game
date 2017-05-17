import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { EnemyLaneService } from '../enemy-lane.service'
import { PlayerService } from '../player.service'
import { CardService } from '../card.service'
import { Card } from '../card.model'

declare var jQuery: any;

@Component({
  selector: 'app-en-lane1',
  templateUrl: './en-lane1.component.html',
  styleUrls: ['./en-lane1.component.scss']
})

export class EnLane1Component implements OnInit {

  constructor(private enemyLaneService: EnemyLaneService) { }

  ngOnInit() {
    console.log('asdf')
  }

}
