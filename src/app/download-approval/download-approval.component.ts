import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-download-approval',
  templateUrl: './download-approval.component.html',
  styleUrls: ['./download-approval.component.scss'],
})
export class DownloadApprovalComponent implements OnInit {
  modalRef!: BsModalRef;
  bsValueStart = new Date();
  bsValueEnd = new Date();

  constructor(private modalService: BsModalService) {
    this.bsValueEnd.setDate(this.bsValueEnd.getDate() + 30);
  }

  ngOnInit(): void {
    console.log('download approval init');
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-lg' })
    );
  }
}
