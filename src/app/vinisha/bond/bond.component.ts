import { Component } from '@angular/core';
import { BondService } from '../services/bond.service';
import { Bond } from '../models/bond.model';

@Component({
  selector: 'app-bond',
  templateUrl: './bond.component.html',
  styleUrls: ['./bond.component.css']
})
export class BondComponent {
  bondDetails:Bond[]=[];
  bond=new Bond();
  constructor(private _bondSrv:BondService){}
  ngOnInit(){
    this._bondSrv.getBondDetails().subscribe(
       data=>{
        this.bondDetails=data;
       },
       error=>{
        console.log(error);
       }
    )
  }
  changeVolume(item:Bond){
    this.bond.volume=prompt("Enter the volume of bonds you want to buy:")
    console.log(this.bond.volume)
    this._bondSrv.postBond(this.bond).subscribe(
      data=>{
        console.log(data)
      },
      error=>{
        console.log(error)
      }
    )

  }
  getVolume(bond:Bond){
    console.log(bond)
    this._bondSrv.postBond(bond).subscribe(
      data=>{
        console.log(data)
      },
      error=>{
        console.log(error)
      }
    )
  }
  
}
