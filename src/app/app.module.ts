import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {} from '@angular/material'
import { AppComponent } from './app.component';
import {SharedModule } from "./shared/shared.module";
import { NewItemComponent } from './new-item/new-item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { ItemDetailComponent } from './item-detail/item-detail.component'
import {DataService} from "./data.service"


@NgModule({
  declarations: [
    AppComponent,
    NewItemComponent,
    ItemListComponent,
    ItemDetailComponent
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
