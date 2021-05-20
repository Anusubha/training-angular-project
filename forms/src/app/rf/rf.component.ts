import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComboBoxComponent } from '@syncfusion/ej2-angular-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import { passwordValidator } from '../password.validator';


@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.css']
})
export class RfComponent implements OnInit {


   /*get username1() {
    return this.registrationForm.get("userName");
  }
  registrationForm = new FormGroup({ 
    "userName": new FormControl(''), 
    "password": new FormControl(''), 
    "confirmPassword": new FormControl(''),
    "profilename": new FormControl(''),
    "email" : new FormControl(''),
    "phonenumber" : new FormControl
  }); */   

  stateList = [
    { id: 1, name: "Andaman and Nicobar Islands" },
    { id: 2, name: "Andhra Pradesh" },
    { id: 3, name: "Arunachal Pradesh" },
    { id: 4, name: "Assam" },
    { id: 5, name: "Bihar" },
    { id: 6, name: "Chandigarh" },
    { id: 7, name: "Chhattisgarh" },
    { id: 8, name: "Dadra and Nagar Haveli" },
    { id: 9, name: "Daman and Diu" },
    { id: 10, name: "Delhi" },
    { id: 11, name: "Goa" },
    { id: 12, name: "Gujarat" },
    { id: 13, name: "Haryana" },
    { id: 14, name: "Himachal Pradesh" },
    { id: 15, name: "Himachal Pradesh" },
    { id: 16, name: "Jammu and Kashmir" },
    { id: 17, name: "Jharkhand" },
    { id: 18, name: "Karnataka" },
    { id: 19, name: "Kerala" },
    { id: 20, name: "Lakshadweep" },
    { id: 21, name: "Madhya Pradesh" },
    { id: 22, name: "Maharashtra" },
    { id: 23, name: "Manipur" },
    { id: 24, name: "Meghalaya" },
    { id: 25, name: "Mizoram" },
    { id: 26, name: "Nagaland" },
    { id: 27, name: "Orissa" },
    { id: 28, name: "Pondicherry" },
    { id: 29, name: "Punjab" },
    { id: 30, name: "Rajasthan" },
    { id: 31, name: "Sikkim" },
    { id: 32, name: "Tamil Nadu" },
    { id: 33, name: "Tripura" },
    { id: 34, name: "Uttaranchal" },
    { id: 35, name: "Uttar Pradesh" },
    { id: 36, name: "West Bengal" }
  ];
  cityList = [
    { id: 1, name: "Ariyalur"},
    { id: 2, name: "Chennai" },
    { id: 3, name: "Coimbatore" },
    { id: 4, name: "Cuddalore" },
    { id: 5, name: "Dharmapuri" },
    { id: 6, name: "Dindigul" },
    { id: 7, name: "Erode" },
    { id: 8, name: "Kanchipuram" },
    { id: 9, name: "Kanniyakumari" },
    { id: 10, name: "Karur" },
    { id: 11, name: "Krishnagiri" },
    { id: 12, name: "Madurai" },
    { id: 13, name: "Nagapattinam" },
    { id: 14, name: "Namakkal" },
    { id: 15, name: "Perambalur" },
    { id: 16, name: "Pudukkottai" },
    { id: 17, name: "Ramanathapuram" },
    { id: 18, name: "Salem" },
    { id: 19, name: "Sivaganga" },
    { id: 20, name: "Thanjavur" },
    { id: 21, name: "Theni" },
    { id: 22, name: "The Nilgiris" },
    { id: 23, name: "Thiruvallur" },
    { id: 24, name: "Thiruvarur" },
    { id: 25, name: "Thoothukkudi" },
    { id: 26, name: "Tiruchirappalli" },
    { id: 27, name: "Tirunelveli" },
    { id: 28, name: "Tiruppur" },
    { id: 29, name: "Tiruvannamalai" },
    { id: 30, name: "Vellore" },
    { id: 31, name: "Viluppuram" },
    { id: 32, name: "Virudhunagar" }
  ];

  constructor(private formBuilder: FormBuilder) { }

  registrationForm = this.formBuilder.group({ 
    userName: ['',[Validators.required, Validators.pattern("^[a-zA-Z0-9 ]+"),Validators.minLength(7),Validators.maxLength(7)]], 
    profilename:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    phonenumber:['',[Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]],
    address: this.formBuilder.group ({ 
      doorno:['',[Validators.required]],
      state: [],
      city: [{value: '', disabled: true}], 
      pincode:['',[Validators.required,Validators.pattern("^\\d+$"),Validators.minLength(6),Validators.maxLength(6)]],
    }),
    password: ['',[Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]], 
    confirmPassword: ['',[Validators.required]],     
},{ validator: passwordValidator });

  ngOnInit(): void{

     /* this.registrationForm.get("state").valueChanges
      .subscribe(f => {
        this.onCountryChanged(f);
      })
    
    this.registrationForm.setValue({ 
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
   this.registrationForm.get("address").get("city").setValue(null);
} 
  onCountryChanged(f: any) {
    if(f==32){
      this.registrationForm.get("address").get("city").enable();
    }else{
      this.registrationForm.get("address").get("city").disable();
    }
  }

}
