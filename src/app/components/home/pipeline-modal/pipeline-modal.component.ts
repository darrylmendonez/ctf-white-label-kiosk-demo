import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

// declare var addMetric: any;

@Component({
  selector: 'app-pipeline-modal',
  templateUrl: './pipeline-modal.component.html',
  styleUrls: ['./pipeline-modal.component.scss'],
})
export class PipelineModalComponent implements OnInit {
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  constructor(private modalService: BsModalService) {}

  modalLaunched() {
    // addMetric(2, 'Pipeline modal viewed.');
  }

  openModal(template: TemplateRef<any>) {
    this.modalLaunched();
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    // addMetric(2, 'Pipeline modal viewed.');
    console.log('Pipeline modal viewed.');
  }
  openModal2(template: TemplateRef<any>) {
    this.modalLaunched();
    this.modalRef2 = this.modalService.show(template, { class: 'second' });
  }
  closeFirstModal() {
    if (!this.modalRef) {
      return;
    }
    this.pipelineClosed();
    this.modalRef.hide();
    this.modalRef = null;
  }

  pipelineClosed() {
    // addMetric(2, 'Pipeline modal closed.');
    console.log('Pipeline modal closed.');
  }

  ngOnInit() {}
}
