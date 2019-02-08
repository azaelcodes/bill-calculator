import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Item} from '../model/item';

@Component({
  selector: 'app-bill-item',
  templateUrl: './bill-item.component.html',
  styleUrls: ['./bill-item.component.css']
})
export class BillItemComponent implements OnInit {

  list: Array<Item> = [];

  @Output() messageEvent = new EventEmitter<Item>();

  constructor() {}

  addItem(input: any) {

    console.log(input);

    const itemObj = new Item();
    itemObj.quantity = 1;
    itemObj.name = 'Food Stuff';
    itemObj.totalPrice = 123;
    this.list.push(itemObj);

  }


  ngOnInit() {
  }

}
