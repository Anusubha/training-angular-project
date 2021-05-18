import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displaytdf = false;
 onPresstdf() {
   this.displaytdf = !this.displaytdf;
   this.displayrf = false;
 }
 displayrf = false;
 onPressrf() {
  this.displayrf = !this.displayrf;
  this.displaytdf = false;
 }
}
