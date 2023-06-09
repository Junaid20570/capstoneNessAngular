import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vinisha',
  templateUrl: './vinisha.component.html',
  styleUrls: ['./vinisha.component.scss']
})
export class VinishaComponent {

  constructor(private router:Router){}
  ngOnInit(){
    let validity=localStorage.getItem('user')
    if(validity=='invalid'){
      alert("please login to view the content")
      this.router.navigate(['/main/home'])
      
    }
  }
}
