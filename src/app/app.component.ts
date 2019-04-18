import { Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
// import { TimeoutService } from './services/timeout.service';

// declare var addMetric: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isTimedOut = false;
  currentUrl: string;
  isAttractorpage = true;

  // @HostListener('document:click', [ '$event' ])
  // documentClick(event: MouseEvent) {
  //     if (this.isTimedOut) {
  //       this.timeoutService.idleStart();
  //     } else {
  //       this.timeoutService.idleRestart();
  //     }
  // }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    // private timeoutService: TimeoutService,
  ) {
    // this.handleRouteEvents()
  }

  ngOnInit() {
    // this.subscribeToTimeout();
  }

  // subscribeToTimeout() {
  //   this.timeoutService.isTimedOut.subscribe((timeoutStatus: boolean) => {
  //     this.isTimedOut = timeoutStatus;
  //   });
  // }

  // handleRouteEvents(): void {
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       this.isAttractorpage = this.router.url === '/' ? true : false;
  //     }
  //   });
  // }

}
