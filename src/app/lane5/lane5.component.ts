import { Component, OnInit, Input, AfterContentInit, AfterViewInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-lane5',
  templateUrl: './lane5.component.html',
  styleUrls: ['./lane5.component.scss']
})

export class Lane5Component implements OnInit {
  @Input() lane: number;
  currentLane


  constructor() { }

  ngOnInit() {
  }

  selectThisLane() {
    console.log("click! " + '.lane5')
    if (jQuery('.lane5').hasClass('selected')) {
      jQuery('.lane5').removeClass('selected')
    } else {

      jQuery('.lane5').addClass('selected')
    }
  }

  ngAfterViewInit() {
  }

}
