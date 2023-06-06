import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/UserModel';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','../register/register.component.scss']
})
export class LoginComponent {

  constructor(private registerService:RegisterService,private router:Router){
  }
  regForm=new FormGroup(
    {
    pwd:new FormControl(),
    email:new FormControl(),
    }
    );
    // static userName:any;
    static validUser:any;
    // static email:any;
  loginUser = new User();
  findUser(){
    if(this.regForm.valid){
      this.registerService.loginCustomer(this.loginUser).subscribe(
        data=> {
          if(data != null){
            alert("login successful");
            this.router.navigate(["/main/home"]);
            window.location.reload();
            // LoginComponent.userName=data.uname;
            LoginComponent.validUser="valid";
            localStorage.setItem('userName',data.uname);
            localStorage.setItem('user','valid');
              
          }else{
          alert("user Not found - login");
          }
        },
        error=>{
        console.log(error) ; 
        }
      )
    }else{
      alert("plz give valid credentials - login");
    }
  }
}
