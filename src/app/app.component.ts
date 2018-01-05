import { Component, Inject } from '@angular/core';
import {MatDialog} from '@angular/material';
import { ItemDetailComponent } from './item-detail/item-detail.component'
import {DataService} from "./data.service"
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public dialog: MatDialog, private dataService: DataService, public snackBar: MatSnackBar) {

  }

  openDialog(ele = {name: '', active: false, description: ''}): void {

    let dialogRef = this.dialog.open(ItemDetailComponent, {
      width: '350px',
      data: ele
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        if(result.id) {
          this.dataService.editItem(result);
          this.openSnackBar("Item updated", "Ok");
        }
        else  {
          this.newIt(result);
          this.openSnackBar("Item added", "Ok");
        }
        
      }
     
    }); 
}

  edit(ev){
    this.openDialog(ev)
  }
  deleteItem(ev){
    this.openDelete(ev.id)
  }
  newIt(ev) {
    this.dataService.addItem(ev)
  }
  openDelete(id) {
    let dialogRef = this.dialog.open(YesNoComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.dataService.deleteItem(id);
        this.openSnackBar("Item Eliminado", "Listo")  } 
    }); 
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,

    });
  }


}
@Component({
  selector: 'yes-no',
  template: `   
<h2 mat-dialog-title>Are you sure?</h2>
<mat-dialog-actions>
  <button [mat-dialog-close]="false" mat-button>No</button>
  <!-- Can optionally provide a result for the closing dialog. -->
  <button mat-button [mat-dialog-close]="true">Yes</button>
</mat-dialog-actions>
  `
})
export class YesNoComponent {

  constructor(
    public dialogRef: MatDialogRef<YesNoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      
     }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
 

