import { Component, OnInit, Input, AfterContentInit, AfterViewInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-lane2',
  templateUrl: './lane2.component.html',
  styleUrls: ['./lane2.component.scss']
})

export class Lane2Component implements OnInit {
  @Input() lane: number;
  currentLane
  laneClass: string

  constructor() { }

  ngOnInit() {
  }

  selectThisLane() {
    console.log("click! " + '.lane2')
    if (jQuery('.lane2').hasClass('selected')) {
      jQuery('.lane2').removeClass('selected')
    } else {

      jQuery('.lane2').addClass('selected')
    }
  }

  ngAfterViewInit() {

  }

}
