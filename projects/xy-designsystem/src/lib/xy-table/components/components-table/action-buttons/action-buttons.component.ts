import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { tableConst } from '../../consts/table'
import { TableButtonAction } from '../../models/tableButtonAction'


@Component({
  selector: '[action-buttons]',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.css'],
})
export class ActionButtonsComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  @Input() value!: any;
  @Output() buttonAction: EventEmitter<TableButtonAction> = new EventEmitter<TableButtonAction>()

  onEditClick() {
    this.buttonAction.emit({
      name: tableConst.actionButton.edit,
      value: this.value,
    })
  }
  onDeleteClick() {
    this.buttonAction.emit({ name: tableConst.actionButton.delete });
  }
  onViewClick() {
    this.buttonAction.emit({ name: tableConst.actionButton.view });
  }

}
