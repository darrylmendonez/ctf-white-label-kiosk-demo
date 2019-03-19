import { TimeoutModalComponent } from './../components/timeout-modal/timeout-modal.component';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { UserIdleService } from 'angular-user-idle';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BehaviorSubject } from 'rxjs';
import { PipelineModalComponent } from '../components/home/pipeline-modal/pipeline-modal.component';

declare var addMetric: any;

@Injectable({
  providedIn: 'root',
})
export class TimeoutService {
  timeoutModalRef: BsModalRef;
  modalRef: BsModalRef;
  private isTimedOutSubject = new BehaviorSubject<boolean>(true);
  isTimedOut = this.isTimedOutSubject.asObservable();

  constructor(
    private router: Router,
    private userIdle: UserIdleService,
    private modalService: BsModalService
  ) {}

  updateTimeoutStatus(value: boolean): void {
    this.isTimedOutSubject.next(value);
  }

  openTimeoutModal() {
    this.timeoutModalRef = this.modalService.show(TimeoutModalComponent, {
      class: 'modal-md timeout-modal',
    });
  }

  closeTimeoutModal() {
    if (!this.timeoutModalRef) {
      return;
    }
    this.timeoutModalRef.hide();
    this.timeoutModalRef = null;
    this.modalService.hide(1);
  }

  idleStop(): void {
    this.userIdle.stopTimer();
    this.updateTimeoutStatus(false);
    this.closeTimeoutModal();
  }

  idleStopWatching(): void {
    this.userIdle.stopWatching();
    this.updateTimeoutStatus(false);
  }

  idleStart(): void {
    this.userIdle.startWatching();
    this.userIdle.onTimerStart().subscribe(count => {
      this.updateTimeoutStatus(false);
      if (count === environment.idleTimeout && this.router.url !== '/') {
        if (!this.timeoutModalRef) {
          this.openTimeoutModal();
        }
      }
    });
    this.userIdle.onTimeout().subscribe(() => {
      this.updateTimeoutStatus(true);
      this.closeTimeoutModal();
      this.router.navigate(['/']);

      addMetric(2, 'Session End');
    });
  }

  idleRestart(): void {
    this.idleStop();
    this.updateTimeoutStatus(false);
  }
}
