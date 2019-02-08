import { Component, OnInit } from '@angular/core';
import {Item} from '../model/item';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  list: Array<Item> = [];
  constructor() { }

  ngOnInit() {
  }

}
