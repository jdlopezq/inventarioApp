import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {} from '@angular/material'
import {SharedModule } from "./shared/shared.module";
import { NewItemComponent } from './new-item/new-item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { ItemDetailComponent } from './item-detail/item-detail.component'
import {DataService} from "./data.service"
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent, YesNoComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    NewItemComponent,
    ItemListComponent,
    ItemDetailComponent,
    YesNoComponent
     ],
  entryComponents: [YesNoComponent],
    
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,HttpModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
