import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatGridListModule, 
    MatListModule,
    MatToolbarModule,MatIconModule} from '@angular/material';


@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatListModule, MatToolbarModule, MatIconModule],
    exports: [MatButtonModule, MatCheckboxModule, MatGridListModule, MatListModule, MatToolbarModule, MatIconModule],
    providers: [],
})
export class MaterialModule { }