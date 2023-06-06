import { Component } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/models/UserModel';
import { passValidator } from 'src/validators/passValidator.validator';
import { ForgotComponent } from '../forgot/forgot.component';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss','../register/register.component.scss']
})
export class ResetComponent {
  constructor(private registerService:RegisterService,private router:Router){
    this.regForm.controls['pwd'].setValidators(passValidator())
    this.updatePassUser.email=ForgotComponent.userEmail;
  }
  regForm=new FormGroup(
    {
      // email:new FormControl(),
      pwd:new FormControl(),
      cnfpwd:new FormControl()
    }
    );

    updatePassUser = new User();

    UpdatePass(){
      if(this.regForm.valid){
        if(!this.regForm.controls['pwd'].valid){
          // console.log(this.regForm.controls['pwd'].valid);
          alert('Enter valid password');
        }else if(!(this.regForm.controls['pwd'].value==this.regForm.controls['cnfpwd'].value)){
          alert('Enter same Password');
        }else{
          console.log(this.updatePassUser);
          this.registerService.resetPassword(this.updatePassUser).subscribe(
                  data=> {
                    //window.location.href
                    // console.log(data);
                    this.router.navigate(["login"]);
                    // console.log(this.updatePassUser);
                    
                    alert("reset successful");
                  },
                  error=>{
                  console.log(error) ; 
                  }
                )
        }
  }else{
    alert("form is invalid")
  }
    }
}
