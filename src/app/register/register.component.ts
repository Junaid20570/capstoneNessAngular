import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/UserModel';
import { emailValidator } from 'src/validators/emailValidator.validator';
import { panValidator } from 'src/validators/panValidator.validator';
import { passValidator } from 'src/validators/passValidator.validator';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private registerService:RegisterService,private router:Router){
    // this.regForm.controls['pwd'].setValidators(passValidator())
    // this.regForm.controls['panNo'].setValidators(panValidator())
    // this.regForm.controls['email'].setValidators([emailValidator(),Validators.required,Validators.minLength(4)])
  }
  regForm=new FormGroup(
    {
    uname:new FormControl(),
    pwd:new FormControl(),
    cnfpwd:new FormControl(),
    panNo:new FormControl(),
    email:new FormControl(),
    // userType:new FormControl(),
    location:new FormControl()
    }
    );
    newUser = new User();
  saveUser(){
    // if(this.regForm.valid){
    //   if(!this.regForm.controls['pwd'].valid){
    //     console.log(this.regForm.controls['pwd'].valid);
    //     alert('Enter valid password');
    //   }else if(!(this.regForm.controls['pwd'].value==this.regForm.controls['cnfpwd'].value)){
    //     alert('Enter same Password');
    //   }else
    //   if(!this.regForm.controls['panNo'].valid){
    //     console.log(this.regForm.controls['panNo'].valid);
    //     alert('Enter valid pan No');
    //   }else
    //   if(!this.regForm.controls['email'].valid){
    //       alert('Enter valid email');
    //   }
    //   else{
    //     this.registerService.registerCustomer(this.newUser).subscribe(
    //       data=> {
    //         //window.location.href
    //         this.router.navigate(["home"]);
    //         console.log(this.newUser);
            
    //         alert("registration successful");
    //       },
    //       error=>{
    //       console.log(error) ; 
    //       }
    //     )
          
    //     }
    // }
    // else{
    //   alert("submit valid detail");
    // }
    this.registerService.registerCustomer(this.newUser).subscribe(
      data=>{
        alert("login successful")
      }
    )

    this.router.navigate(["/main/home"]);
  }
}
