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
    let tok=localStorage.getItem('token')
    if(tok!=null){
      this._bondSrv.getBondDetails(tok).subscribe(
        data=>{
         this.bondDetails=data;
        },
        error=>{
         console.log(error);
        }
     )
    }
  }
  changeVolume(item:Bond){
    item.volume=prompt("Enter the volume of bonds you want to buy:")
    console.log(this.bond.volume)
    let tok=localStorage.getItem('token')
    let mail=localStorage.getItem('userName')
    if(tok!=null && mail!=null){
      this._bondSrv.postBond(item,tok,mail).subscribe(
        data=>{
          alert('Bond purchased with '+item.volume+' volume')
        },
        error=>{
          console.log(error)
        }
      )
    }


  }
  // getVolume(bond:Bond){
  //   console.log(bond)
  //   this._bondSrv.postBond(bond).subscribe(
  //     data=>{
  //       console.log(data)
  //     },
  //     error=>{
  //       console.log(error)
  //     }
  //   )
  // }
  
}
