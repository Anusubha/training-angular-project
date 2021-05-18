import { Component, OnInit } from '@angular/core';

import { User } from '../model/user';


@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TDFComponent implements OnInit {
  
  userDetails = new User("","");
  constructor() { }

  ngOnInit(): void {
  }

}
