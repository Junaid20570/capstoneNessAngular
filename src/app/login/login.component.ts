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
    // if(this.regForm.valid){
      
    // }else{
    //   alert("plz give valid credentials - login");
    // }
    this.registerService.genToken(this.loginUser).subscribe(
      data=> {
        if(data != null){
          localStorage.setItem('token',JSON.parse(JSON.stringify(data)))
          this.registerService.loginCustomer(data,this.loginUser).subscribe(
            loginData=>{
              // LoginComponent.validUser="valid";
              localStorage.setItem('userName',loginData.email);
              localStorage.setItem('user','valid');
              this.router.navigate(["/main/home"]).then(()=>{
                window.location.reload()
              });
              // window.location.reload()
            } 
          )
        }else{
          alert("user Not found - login");
        }
      },
      error=>{
        console.log(error) ; 
      }
    )
    
  }
}
