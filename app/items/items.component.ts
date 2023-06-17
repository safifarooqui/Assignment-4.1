//npm install -g @angular/cli

//ng new item-manager

//cd item-manager

//ng generate component items

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items = ['Item 1', 'Item 2', 'Item 3'];
  newItem = '';

  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void {
    this.items.push(this.newItem);
    this.newItem = '';
  }

  deleteItem(item: string): void {
    this.items = this.items.filter(i => i !== item);
  }

}
