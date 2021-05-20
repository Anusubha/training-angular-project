import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TDFComponent } from './tdf/tdf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RfComponent } from './rf/rf.component';
import { ComboBoxModule, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';


@NgModule({
  declarations: [
    AppComponent,
    TDFComponent,
    RfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DropDownListModule ,
    ComboBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
