import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.css']
})
export class RfComponent implements OnInit {

   get username1() {
    return this.registrationForm.get("userName");
  }
/* 
  registrationForm = new FormGroup({ 
    "userName": new FormControl(''), 
    "password": new FormControl(''), 
    "confirmPassword": new FormControl(''),
    "profilename": new FormControl(''),
    "email" : new FormControl(''),
    "phonenumber" : new FormControl
  
  }); */   

  
  

  constructor(private formBuilder: FormBuilder) { }

  registrationForm = this.formBuilder.group({ 
    userName: ['',[Validators.required, Validators.minLength(5)]], 
    password: [], 
    confirmPassword: ['',[Validators.required]], 
    profilename:[],
    email:['',[Validators.required]],
    phonenumber:['',[Validators.required,Validators.minLength(10)]]
    
});

  ngOnInit(): void{
     /* this.registrationForm.setValue({ 
      userName: 'Anu', 
      password: '', 
      confirmPassword: '', 
      profilename:'',
      email:'',
      phonenumber:''

    }); 
    this.registrationForm.patchValue({ 
      password: '@Nu' 
   });
   this.registrationForm.get("confirmPassword").setValue("@Nu");*/
  }  
    

}
