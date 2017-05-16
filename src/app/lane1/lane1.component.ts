import { Component, OnInit, Input, AfterContentInit, AfterViewInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-lane1',
  templateUrl: './lane1.component.html',
  styleUrls: ['./lane1.component.scss']
})

export class Lane1Component implements OnInit {
  @Input() lane: number;
  currentLane
  laneClass: string

  constructor() { }

  ngOnInit() {
  }

  selectThisLane() {
    console.log("click! " + '.lane1')
    if (jQuery('.lane1').hasClass('selected')) {
      jQuery('.lane1').removeClass('selected')
    } else {

      jQuery('.lane1').addClass('selected')
    }
  }

  ngAfterViewInit() {

  }

}
