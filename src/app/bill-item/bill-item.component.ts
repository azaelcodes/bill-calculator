import { Component, OnInit } from '@angular/core';
import {Item} from '../model/item';

@Component({
  selector: 'app-bill-item',
  templateUrl: './bill-item.component.html',
  styleUrls: ['./bill-item.component.css']
})
export class BillItemComponent implements OnInit {

  item: Item;

  constructor() {}

  addItem(): void {

    this.item = new Item(1, 'cereal', 5.6);

  }

  ngOnInit() {
  }

}
