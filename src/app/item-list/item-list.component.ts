import { Component, OnInit, ViewChild,EventEmitter, ElementRef, AfterViewInit, Inject, Output } from '@angular/core';
import { DataService } from "./../data.service"
import { MatTableDataSource, MatSort, MatFormField,MAT_DIALOG_DATA } from '@angular/material';
import { MatPaginator } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import { Element } from "./../item.model";



@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, AfterViewInit {
  @Output() edited: EventEmitter<Element> = new EventEmitter<Element>()
  @Output() delete: EventEmitter<Element> = new EventEmitter<Element>()
  items: Element[]
  displayedColumns = ['name', 'status', 'description', 'options'];
  dataSource: any;
  paginator: any;
  @ViewChild('filterItem') filterItem: ElementRef;
  @ViewChild('filterDescription') filterDescription: ElementRef
  @ViewChild(MatSort) sort: MatSort;

  constructor(private data: DataService) {

  }
 
  editItem(il: Element) {
    this.edited.emit(il)
  }
  deleteItem(il:Element){
    this.delete.emit(il)
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.data.getItems().subscribe(data => {
      this.items = data;
    });
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.items;

    Observable.fromEvent(this.filterItem.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filterPredicate = (data: Element, filter: string) => {
          return data.name == filter
        }
        this.dataSource.filter = this.filterItem.nativeElement.value
      });
    Observable.fromEvent(this.filterDescription.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filterPredicate = (data: Element, filter: string) => {
          return data.description == filter
        }
        this.dataSource.filter = this.filterDescription.nativeElement.value
      });

      
  }
  pagChanges(page: Page) {
    console.log(page)
    let startIndex = (page.pageIndex) * page.pageSize;
    let endIndex = (page.pageIndex + 1) * page.pageSize;
    this.dataSource.data = this.items.slice(startIndex, endIndex);
  }


}



interface Page {
  pageIndex: number,
  pageSize: number,
  length: number
}