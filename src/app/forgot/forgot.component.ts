import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss','../register/register.component.scss']
})
export class ForgotComponent {
  static userEmail:any;
  email:any;

  getEmail(){
    ForgotComponent.userEmail=this.email;
    console.log(ForgotComponent.userEmail);
  }
}
