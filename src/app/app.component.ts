import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import { ItemDetailComponent } from './item-detail/item-detail.component'
import {DataService} from "./data.service"
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public dialog: MatDialog, private dataService: DataService) {}

  openDialog(ele = {name: '', active: false, description: ''}): void {

    let dialogRef = this.dialog.open(ItemDetailComponent, {
      width: '350px',
      data: ele
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        if(result._id) this.dataService.editItem(result);
        else this.newIt(result) 
      }
     
    }); 
}

  edit(ev){
    this.openDialog(ev)
  }
  delete(ev){

  }
  newIt(ev) {
    this.dataService.addItem(ev)
  }
  
}
