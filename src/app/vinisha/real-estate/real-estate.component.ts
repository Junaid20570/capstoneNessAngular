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
    this._realEstateSrv.getRealEstateDetails().subscribe(
      data=>{
        this.realEstate=data;
      },
      error=>{
        console.log(error);
      }
    )
  }
  changeVolume(){
    let volume=prompt("Enter the volume you want to invest");
   
    this.isButtonDisabled=true
    
  }
}
