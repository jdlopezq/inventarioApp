import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Element } from "./item.model"
import {Http, Response, Headers,} from '@angular/http'
import { OnInit } from '@angular/core';
import 'rxjs/add/operator/map';




@Injectable()

export class DataService implements OnInit {
  items: any[]
  dataHttp: string;
 
  subject = new BehaviorSubject<Element[]>(this.items)
  constructor(private http:Http){ 
    this.dataHttp='http://localhost:3000/items'
    this.http.get(this.dataHttp).map(response=>response.json()).subscribe(res=>{
      console.log(res);
      this.items=res;
      this.subject.next(this.items);
      });


    }
    

  getItems() {
    return this.subject;
  }
  
  addItem(il: Element) {
    console.log(il);
    il.index = this.items.length;
    this.http.post(this.dataHttp, il).map(response => response.json()).subscribe(res => {
      this.httpCall();
      console.log(res);
    });
  }

  deleteItem(id: string) {
    this.http.delete(this.dataHttp+ '/' + id).map(response => response.json()).subscribe(res => {
      this.httpCall();
    });
  }


  editItem(il: Element) {
    this.http.put(this.dataHttp + '/' + il.id, il).map(response => response.json()).subscribe(res => {
      this.httpCall();
      console.log("h");
    });}
    


  httpCall() {
    this.http.get(this.dataHttp).map(response => response.json()).subscribe(res => {
      console.log(res)
      this.items = res;
      this.subject.next(this.items);
    });
  }
  ngOnInit(){

  }
}
