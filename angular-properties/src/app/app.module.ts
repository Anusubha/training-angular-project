import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Type1Component } from './type1/type1.component';
import { CubePipe } from './cube.pipe';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { TemplateComponent } from './template/template.component';
import { HighlightDirective } from './highlight.directive'; 

@NgModule({
  declarations: [
    AppComponent,
    Type1Component,
    CubePipe,
    DirectiveComponent,
    TemplateComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
