// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainnavbar',
  templateUrl: './mainnavbar.component.html',
  styleUrls: ['./mainnavbar.component.scss']
})
export class MainnavbarComponent {
  constructor(private router:Router){}
  usr:string=''
  loginUser=true;
  logoutUser=false;
  ngOnInit(): void {
    let user=localStorage.getItem('user');
    if(user!=null){
      this.usr= user
    }
    console.log(this.usr)
    }

    logOut(){
      localStorage.setItem('token','')
      localStorage.setItem('userName','')
      localStorage.setItem('user','invalid')
      this.router.navigate(["/main/home"]).then(()=>{
        window.location.reload()
      });
      
    }
}
