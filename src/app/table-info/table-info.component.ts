import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.scss'],
})
export class TableInfoComponent implements OnInit {
  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-lg' })
    );
  }
}
