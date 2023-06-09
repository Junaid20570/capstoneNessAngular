import { Component } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss','../register/register.component.scss']
})
export class ForgotComponent {
  static userEmail:string='';
  email:string='';
  prop:any='disabled'
  constructor(private _regServ:RegisterService){}

  checkMail(){
    console.log('mail is '+this.email)
    if(this.email!=null){
      ForgotComponent.userEmail=this.email
      this._regServ.forgotPass(this.email).subscribe(
        data=>{
          if(data!=null){
            this.prop=''
            console.log('prop is '+this.prop)
          }
          else{
            alert("email doesn't exists")
          }
        }
      )
    }
  }
}
