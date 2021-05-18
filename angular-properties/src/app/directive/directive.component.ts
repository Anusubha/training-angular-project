import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  trueValue = true;
  falseValue = false;

  messageClasses = {
    "text-success" : this.trueValue,
    "text-error" : this.falseValue,
    "text-special" : this.trueValue
  };

  messageStyles = {
    'color': 'orange', 
    'font-style':  this.falseValue      ? 'italic' : 'bold', 
    'font-size':   this.trueValue    ? '24px'   : '12px' 
  };

  isActive = true;

  colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

  color = 'orange';

  constructor() { }

  ngOnInit(): void {
  }

}
