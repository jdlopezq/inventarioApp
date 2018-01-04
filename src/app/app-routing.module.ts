import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {NewItemComponent} from "./new-item/new-item.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component"
const routes: Routes = [
  { path: '', component: NewItemComponent},
  { path: 'edit/:id', component: ItemDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }