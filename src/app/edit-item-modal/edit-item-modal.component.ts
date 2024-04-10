import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: [
    '../../assets/css/style.css'
  ]
})
export class EditItemModalComponent {
  @Input() item: any;
  updatedItem: any = {};

  constructor(public activeModal: NgbActiveModal) { }

  onSave() {
    if (this.item) {
      this.item.name = this.updatedItem?.name;
      this.item.quantity = this.updatedItem?.quantity;
      this.item.measurement = this.updatedItem?.measurement;
    }

    this.activeModal.close('saved');
  }

  onClose() {
    this.activeModal.dismiss('closed');
  }
}
