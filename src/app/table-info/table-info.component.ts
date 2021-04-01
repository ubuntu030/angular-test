import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.scss'],
})
export class TableInfoComponent implements OnInit {
  modalRef!: BsModalRef;
  bsValueStart = new Date();
  bsValueEnd = new Date();

  constructor(private modalService: BsModalService) {
    this.bsValueEnd.setDate(this.bsValueEnd.getDate() + 30);
  }

  ngOnInit(): void {
    console.log('table info init..');
    
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-lg' })
    );
  }
}
