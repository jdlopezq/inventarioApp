import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent  {
  form: FormGroup

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<ItemDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.createForm(data);
      
     }



  onNoClick(): void {
    this.dialogRef.close();
  }

  createForm(data) {
    this.form = this.fb.group({
      id: data.id,
      index: data.index,
      name: [data.name, Validators.required], 
      isActive: [data.isActive, Validators.required],
      description: [data.description, Validators.required]
    });
  }
  item(el){
    this.dialogRef.close(el)
    console.log(el);
  }
  

  }


