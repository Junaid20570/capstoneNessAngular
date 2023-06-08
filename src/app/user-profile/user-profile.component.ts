import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterService } from '../register.service';
import { User } from 'src/models/UserModel';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

    userName = localStorage.getItem('userName');
    userMail:any;
    User = new User();
  constructor(private registerService:RegisterService){}
    ngOnInit(){
      this.userMail = localStorage.getItem('userName');
      this.User.email=this.userMail;
      this.registerService.customerProfile(this.User).subscribe(
        data=> {
          if(data != null){
            console.log("my userMail " + data.email);
            this.User=data;
            console.log(this.User);
          }else{
          alert("data is empty");
          }
        },
        error=>{
        console.log(error) ;
        }
      )
    }
}
