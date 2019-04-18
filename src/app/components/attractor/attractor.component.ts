import { Component, OnInit } from '@angular/core';

// declare var addMetric: any;

@Component({
  selector: 'app-attractor',
  templateUrl: './attractor.component.html',
  styleUrls: ['./attractor.component.scss']
})
export class AttractorComponent implements OnInit {

  startSession() {
    // addMetric(1, 'Session Start');
    console.log('Session Start');
  }

  constructor() { }

  ngOnInit() {
  }

}
