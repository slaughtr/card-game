import { Component, OnInit, Input, AfterContentInit, AfterViewInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-lane4',
  templateUrl: './lane4.component.html',
  styleUrls: ['./lane4.component.scss']
})

export class Lane4Component implements OnInit {
  @Input() lane: number;
  currentLane
  laneClass: string

  constructor() { }

  ngOnInit() {
  }

  selectThisLane() {
    console.log("click! " + '.lane4')
    if (jQuery('.lane4').hasClass('selected')) {
      jQuery('.lane4').removeClass('selected')
    } else {

      jQuery('.lane4').addClass('selected')
    }
  }

  ngAfterViewInit() {

  }

}
