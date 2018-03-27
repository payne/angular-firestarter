import { Component, OnInit } from '@angular/core';

import { ItemService } from '../shared/item.service';

import { Item } from '../shared/item';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
                      { name: 'Dany', gender: 'Male', company: 'KFC' },
                      { name: 'Molly', gender: 'Female', company: 'Burger King' },
                    ];
          columns = [
                      { prop: 'name' },
                      { name: 'Gender' },
                      { name: 'Company' }
                    ];

  items: Observable<Item[]>;
  showSpinner = true;

  constructor(private itemService: ItemService) {
    this.items = this.itemService.getItemsList();
  }

  ngOnInit() {
    this.items.subscribe((x) => {
      this.showSpinner = false;
    });
  }

  deleteItems() {
    this.itemService.deleteAll();
  }
}
