import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-box',
  templateUrl: './radio-box.component.html',
  styleUrls: ['./radio-box.component.css']
})
export class RadioBoxComponent implements OnInit {

  uuid: any;
  @Input('id') id: string;
  @Input('items') items: any[];
  @Input() selectedValue: any;
  @Output() selectedValueChange = new EventEmitter();
  @Input() selectedItem: any;
  @Output() selectedItemChange = new EventEmitter();

  constructor() {
    this.uuid = `${new Date().getTime().toString()}${Math.floor(Math.random() * 10000)}`; // TODO replace with UUID

  }

  ngOnInit(): void {
  }

  isChecked(item: any, index: number, last: boolean): boolean {
    if (item && item.value == this.selectedValue) {
      return true;
    } else {
      return false;
    }
  }

  handlerRadioBoxChange(item: any) {
    this.selectedValue = item.value;
    this.selectedValueChange.emit(item.value);
    this.selectedItem = item;
    this.selectedItemChange.emit(item);
  }
}
