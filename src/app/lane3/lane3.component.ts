import { Component, OnInit, Input, AfterContentInit, AfterViewInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-lane3',
  templateUrl: './lane3.component.html',
  styleUrls: ['./lane3.component.scss']
})

export class Lane3Component implements OnInit {
  @Input() lane: number;
  currentLane
  laneClass: string

  constructor() { }

  ngOnInit() {
  }

  selectThisLane() {
    console.log("click! " + '.lane3')
    if (jQuery('.lane3').hasClass('selected')) {
      jQuery('.lane3').removeClass('selected')
    } else {

      jQuery('.lane3').addClass('selected')
    }
  }

  ngAfterViewInit() {

  }

}
