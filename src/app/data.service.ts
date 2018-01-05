import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Element } from "./item.model"




@Injectable()

export class DataService {
  items: any[] = require("./fake.json");
  subject = new BehaviorSubject<Element[]>(this.items)
  constructor() { }
  getItems() {
    return this.subject;
  }
  
  addItem(il: Element){
    this.items.push(il)
    this.subject.next(this.items);
  }

  deleteItem(il:Element){

  }

  editItem(il:Element){

  }
}
