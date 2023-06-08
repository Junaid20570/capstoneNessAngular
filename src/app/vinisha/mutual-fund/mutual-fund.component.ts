import { Component } from '@angular/core';
import { MutualFund } from '../models/mutualfund.model';
import { HttpClient } from '@angular/common/http';
import { MutualfundService } from '../services/mutualfund.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mutual-fund',
  templateUrl: './mutual-fund.component.html',
  styleUrls: ['./mutual-fund.component.css']
})
export class MutualFundComponent {
 
  constructor(private _mutualSrv:MutualfundService,private  _router:Router){}
  isButtonDisabled=true;
  mutualFund:MutualFund[]=[];
  searchTerm:String=''
  ngOnInit(){
    let tok=localStorage.getItem('token')
    if(tok!=null){
      this._mutualSrv.getMutualFunds(tok).subscribe(
        data=>{
          this.mutualFund=data;
         
        },
        error=>{
          console.log(error)
        }
  
      )
    }
    

  }
  invest(item:MutualFund){
    let tok=localStorage.getItem('token')
    let mail=localStorage.getItem('userName')
    if(tok!=null && mail!=null){
      this._mutualSrv.postFunds(item,tok,mail).subscribe(
        data=>{
          alert('Fund purchased')
        },
        error=>{
          console.log(error)
        }
      )
  }
}
  changePage(name:String){
    if(name=="DSP MidCap Fund")
    this._router.navigate(["/main/vinisha/details"])
    else if(name=="Mirae Asset Silver ETF")
    this._router.navigate(["/main/vinisha/miraedetails"])
    else if(name=="ITI Focused Equity Fund(G)-Direct Plan" || name=="ITI Focused Equity Fund-Reg(G)")
    this._router.navigate(["/main/vinisha/itidetails"])
    else if(name=="Axis NIFTY IT Index Fund-Reg(G)")
    this._router.navigate(["/main/vinisha/axis"])
  }

}
