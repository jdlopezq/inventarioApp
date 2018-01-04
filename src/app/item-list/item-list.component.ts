import { Component, OnInit } from '@angular/core';
import {DataService} from "./../data.service"

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
items:any[];
constructor(private data: DataService) { }

  ngOnInit() {this.items = this.data.getItems();
  }

}
