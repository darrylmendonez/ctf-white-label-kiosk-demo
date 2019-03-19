import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITArea } from './../../models/trial.model';
import { TAreaData } from './../../data/tArea.data';
import { fadeIn } from '../../router.animation';
import { fadeInOnEnterAnimation } from 'angular-animations';
import {
  flipCardBackAnimation,
  flipCardFrontAnimation,
} from '../../flip.animation';

declare var addMetric: any;

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.scss'],
  animations: [
    fadeIn(),
    fadeInOnEnterAnimation(),
    flipCardBackAnimation(),
    flipCardFrontAnimation(),
  ],
})
export class TrialComponent implements OnInit {
  tAreas: ITArea[];
  trialParams: string;
  currentParams: string;
  currentTArea;
  currentDisease;
  currentTrial;
  currentCompoundInfo;
  isTransition = false;
  isFirstPageLoad = true;
  cardFlipped = true; // facing foward
  subParameter: string;

  constructor(private route: ActivatedRoute) {
    this.trialParams = route.snapshot.params['trialParams'];
  }
  @HostBinding('@fadeIn')
  stringCheck(data) {
    return typeof data === 'string';
  }

  fireTrialFadeAnimation() {
    this.isTransition = false;
    if (!this.isFirstPageLoad) {
      this.isTransition = true;
      setTimeout(() => {
        this.isTransition = false;
      }, 500);
    } else {
      this.isFirstPageLoad = false;
    }
  }

  loadSubTrials(parameter) {
    this.cardFlipped = !this.cardFlipped;
    setTimeout(() => {
      this.subParameter = parameter;
      console.log('this.subParameter = ', this.subParameter);
      if (this.subParameter === 'uc1') {
        addMetric(2, 'UC/1368-0004 trial card options viewed.');
        console.log('UC/1368-0004 trial card options viewed.');
      }
      // tslint:disable-next-line:one-line
      else if (this.subParameter === 'uc2') {
        addMetric(2, 'UC/1368-0005 trial card options viewed.');
        console.log('UC/1368-0005 trial card options viewed.');
      }
      // tslint:disable-next-line:one-line
      else if (this.subParameter === 'uc3') {
        addMetric(2, 'UC/1368-0010 trial card options viewed.');
        console.log('UC/1368-0010 trial card options viewed.');
      }
      // tslint:disable-next-line:one-line
      else if (this.subParameter === 'ln1') {
        addMetric(2, 'LN/1293-0010 trial card options viewed.');
        console.log('LN/1293-0010 trial card options viewed.');
      }
      // tslint:disable-next-line:one-line
      else if (this.subParameter === 'ln2') {
        addMetric(2, 'LN/1293-0013 trial card options viewed.');
        console.log('LN/1293-0013 trial card options viewed.');
      }
    }, 250);
    console.log('cardFlipped = ', this.cardFlipped);
  }

  loadSubTrialsFromTrialLinks(parameter) {
    this.subParameter = parameter;
    if (this.cardFlipped === false) {
      this.cardFlipped = true;
      console.log('if fired');
    }
    // tslint:disable-next-line:one-line
    else {
      this.fireTrialFadeAnimation();
      console.log('else fired');
    }
    console.log('this.subParameter = ', this.subParameter);
    if (this.subParameter === 'uc1') {
      addMetric(2, 'UC/1368-0004 trial card options viewed.');
      console.log('UC/1368-0004 trial card options viewed.');
    }
    // tslint:disable-next-line:one-line
    else if (this.subParameter === 'uc2') {
      addMetric(2, 'UC/1368-0005 trial card options viewed.');
      console.log('UC/1368-0005 trial card options viewed.');
    }
    // tslint:disable-next-line:one-line
    else if (this.subParameter === 'uc3') {
      addMetric(2, 'UC/1368-0010 trial card options viewed.');
      console.log('UC/1368-0010 trial card options viewed.');
    }
    // tslint:disable-next-line:one-line
    else if (this.subParameter === 'ln1') {
      addMetric(2, 'LN/1293-0010 trial card options viewed.');
      console.log('LN/1293-0010 trial card options viewed.');
    }
    // tslint:disable-next-line:one-line
    else if (this.subParameter === 'ln2') {
      addMetric(2, 'LN/1293-0013 trial card options viewed.');
      console.log('LN/1293-0013 trial card options viewed.');
    }
    console.log('loadSubTrialsFromTrialLinks fired');
  }

  loadData(diseaseName) {
    this.fireTrialFadeAnimation();
    this.subParameter = diseaseName;
    this.tAreas = TAreaData;
    this.currentParams = diseaseName || this.trialParams;

    if (this.currentParams === 'gpp') {
      this.currentTArea = this.tAreas[0];
      this.currentDisease = this.currentTArea.diseases[0];
      this.currentTrial = this.currentDisease.trials[0];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'ppp') {
      this.currentTArea = this.tAreas[0];
      this.currentDisease = this.currentTArea.diseases[1];
      this.currentTrial = this.currentDisease.trials[0];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'pso') {
      this.currentTArea = this.tAreas[0];
      this.currentDisease = this.currentTArea.diseases[2];
      this.currentTrial = this.currentDisease.trials[0];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'uc') {
      this.cardFlipped = false;
      this.currentTArea = this.tAreas[1];
      this.currentDisease = this.currentTArea.diseases[0];
      this.currentTrial = this.currentDisease.trials[0];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'uc1') {
      // this.subTrialTransitioning = true;
      this.currentTArea = this.tAreas[1];
      this.currentDisease = this.currentTArea.diseases[0];
      this.currentTrial = this.currentDisease.trials[0];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'uc2') {
      this.currentTArea = this.tAreas[1];
      this.currentDisease = this.currentTArea.diseases[0];
      this.currentTrial = this.currentDisease.trials[1];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'uc3') {
      this.currentTArea = this.tAreas[1];
      this.currentDisease = this.currentTArea.diseases[0];
      this.currentTrial = this.currentDisease.trials[2];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'cd') {
      this.currentTArea = this.tAreas[1];
      this.currentDisease = this.currentTArea.diseases[1];
      this.currentTrial = this.currentDisease.trials[0];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'ln') {
      this.cardFlipped = false;
      this.currentTArea = this.tAreas[2];
      this.currentDisease = this.currentTArea.diseases[0];
      this.currentTrial = this.currentDisease.trials[0];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'ln1') {
      this.currentTArea = this.tAreas[2];
      this.currentDisease = this.currentTArea.diseases[0];
      this.currentTrial = this.currentDisease.trials[0];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'ln2') {
      this.currentTArea = this.tAreas[2];
      this.currentDisease = this.currentTArea.diseases[0];
      this.currentTrial = this.currentDisease.trials[1];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'ssc-ild') {
      this.currentTArea = this.tAreas[3];
      this.currentDisease = this.currentTArea.diseases[0];
      this.currentTrial = this.currentDisease.trials[0];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    // tslint:disable-next-line:one-line
    else if (this.currentParams === 'pf-ild') {
      this.currentTArea = this.tAreas[3];
      this.currentDisease = this.currentTArea.diseases[1];
      this.currentTrial = this.currentDisease.trials[0];
      this.currentCompoundInfo = this.currentTrial.compoundInfo;
    }
    console.log('this.currentTArea = ', this.currentTArea);
    console.log('this.currentDisease = ', this.currentDisease);
    console.log('this.currentTrial = ', this.currentTrial);
    console.log('this.currentCompoundInfo = ', this.currentCompoundInfo);
    if (this.currentParams === 'uc' || this.currentParams === 'ln') {
      addMetric(
        2,
        this.currentDisease.primaryName + ' trial card options viewed.'
      );
      console.log(
        this.currentDisease.primaryName + ' trial card options viewed.'
      );
    }
    // tslint:disable-next-line:one-line
    else {
      addMetric(
        2,
        this.currentDisease.primaryName +
          '/' +
          this.currentTrial.name +
          ' trial card viewed.'
      );
      console.log(
        this.currentDisease.primaryName +
          '/' +
          this.currentTrial.name +
          ' trial card viewed.'
      );
    }
  }

  ngOnInit() {
    this.loadData(this.trialParams);
  }
}
