import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-maintain',
  templateUrl: './maintain.component.html',
  styleUrls: ['./maintain.component.scss'],
})
export class MaintainComponent implements OnInit {
  modalRef!: BsModalRef;
  bsValueStart = new Date();
  bsValueEnd = new Date();

  constructor(private modalService: BsModalService) {
    this.bsValueEnd.setDate(this.bsValueEnd.getDate() + 30);
  }

  ngOnInit(): void {
    console.log('maintain init');
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-lg' })
    );
  }
}
