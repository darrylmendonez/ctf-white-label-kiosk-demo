import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { ITArea } from '../../models/trial.model';
import { TAreaData } from '../../data/tArea.data';
import { fadeIn } from '../../router.animation';
import { ActivatedRoute } from '@angular/router';

// declare var addMetric: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeIn()],
})
export class HomeComponent implements OnInit {
  tAreas = TAreaData;
  trialParams: string;

  constructor(private route: ActivatedRoute) {
    this.trialParams = route.snapshot.params['trialParams'];
  }

  @HostBinding('@fadeIn')
  ngOnInit() {
    // addMetric(2, 'Home page viewed.');
    console.log('Home page viewed.');
  }
}
