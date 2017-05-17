import { Component, OnInit, Input, AfterContentInit, AfterViewInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-lane',
  templateUrl: './lane.component.html',
  styleUrls: ['./lane.component.css']
})

export class LaneComponent implements OnInit {
  @Input() lane: number;
  currentLane
  laneClass: string

  constructor() { }

  ngOnInit() {
  }

  selectThisLane() {
    console.log("click! " + this.laneClass)
    if (jQuery(this.laneClass).hasClass('selected')) {
      jQuery(this.laneClass).removeClass('selected')
    } else {

      jQuery(this.laneClass).addClass('selected')
    }
  }

  ngAfterViewInit() {
    this.laneClass = '.lane' + this.lane
    if (this.lane === 0) {
      jQuery(this.laneClass).text('lane is zero')
    } else if (this.lane === 1) {
      jQuery(this.laneClass).text('lane is one')
    } else if (this.lane === 2) {
      jQuery(this.laneClass).text('lane is two')
    } else if (this.lane === 3) {
      jQuery(this.laneClass).text('lane is three')
    } else if (this.lane === 4) {
      jQuery(this.laneClass).text('lane is four')
    }
  }

}
