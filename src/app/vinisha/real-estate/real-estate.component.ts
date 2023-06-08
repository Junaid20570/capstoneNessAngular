import { Component } from '@angular/core';
import { RealEstate } from '../models/realestate.model';
import { RealEstateService } from '../services/real-estate.service';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.css']
})
export class RealEstateComponent {
  realEstate:RealEstate[]=[]
  isButtonDisabled=false
  constructor(private _realEstateSrv:RealEstateService){}
  ngOnInit(){
    let tok=localStorage.getItem('token')
    if(tok!=null){
      this._realEstateSrv.getRealEstateDetails(tok).subscribe(
        data=>{
          this.realEstate=data;
        },
        error=>{
          console.log(error);
        }
      )
    }
  }
  changeVolume(item:RealEstate){
    item.volume=prompt("Enter the volume you want to invest");
    let tok=localStorage.getItem('token')
    let mail=localStorage.getItem('userName')
    if(tok!=null && mail!=null){
      this._realEstateSrv.postRE(item,tok,mail).subscribe(
        data=>{
          alert('Real Estate purchased')
        },
        error=>{
          console.log(error)
        }
      )
  }
   
    this.isButtonDisabled=true
    
  }
}
