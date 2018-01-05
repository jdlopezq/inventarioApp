import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatSlideToggleModule
    
   
    
} from '@angular/material';
import {FormsModule} from '@angular/forms'
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
    imports: [MatButtonModule,
        MatCheckboxModule,
        MatGridListModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        MatPaginatorModule,
        MatTableModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatDialogModule,
        FormsModule,
        MatRadioModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        MatSlideToggleModule
       ],
    exports: [MatButtonModule,
        MatCheckboxModule,
        MatGridListModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        MatPaginatorModule,
        MatTableModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatMenuModule,
        MatDialogModule,
        FormsModule,
        MatRadioModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        MatSlideToggleModule
    ],
    providers: [],
})
export class MaterialModule { }