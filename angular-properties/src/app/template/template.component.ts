import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  Name = 'Angular';
  today: number = Date.now();
  employee: any = {
    name: 'Anusubha',
    age: 25
  }
  imageUrl='https://i.pinimg.com/236x/25/75/da/2575da6301fa858eb3fafe41a4384958.jpg';
  isButtonDisabled = false;
  isSuccess = true;
  colorWithAlignment = 'multiple-binding-color alignment';
  multiStyle = 'color: Green; padding-left: 10px';
  buttonClickCount =0;
  changeColor=true;
  username = "";
  saveValue=0;

  constructor() { }

  ngOnInit(): void {
  }
  buttonClick(){
    this.buttonClickCount = this.buttonClickCount + 1;
    this.changeColor=this.buttonClickCount%2==0;
  }
  onSave(){
    this.saveValue =this.buttonClickCount;
  }
  callPhone(value:any){
    console.log(value);
  }
}
