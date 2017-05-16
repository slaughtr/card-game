import { Component, OnInit, Input, AfterContentInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-lane',
  templateUrl: './lane.component.html',
  styleUrls: ['./lane.component.css']
})

export class LaneComponent implements OnInit {
  @Input() lane: number;
  currentLane


  constructor() { }

  ngOnInit() {
    console.log(this.lane)

  }

  ngAfterContentInit() {
    console.log(this.lane)
    if (this.lane === 1) {
      jQuery('.lane').text('dog')
    }
  }

}
