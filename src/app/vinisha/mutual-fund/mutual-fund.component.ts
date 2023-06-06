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
    this._mutualSrv.getMutualFunds().subscribe(
      data=>{
        this.mutualFund=data;
       
      },
      error=>{
        console.log(error)
      }

    )

  }
  // inputBuyDisplay(){
  //   let volume=confirm("Are you sure to invest in this Mutual Fund?")
  //   if(volume)
  //    alert("Investment Made")
  //   else
  //    alert("Continue")
  //   this.isButtonDisabled=false
  // }
  
  changePage(name:String){
    if(name=="DSP MidCap Fund")
    this._router.navigate(["/details"])
    else if(name=="Mirae Asset Silver ETF")
    this._router.navigate(["/miraedetails"])
    else if(name=="ITI Focused Equity Fund(G)-Direct Plan" || name=="ITI Focused Equity Fund-Reg(G)")
    this._router.navigate(["/itidetails"])
    else if(name=="Axis NIFTY IT Index Fund-Reg(G)")
    this._router.navigate(["/axis"])
  }
  // search(){
  //   if(this.searchTerm=='')
  //   {
  //     this.ngOnInit();
  //   }
  //   else{
  //     this.mutualFund=this.mutualFund.filter(res=>{
  //       return res.searchTerm.toLocaleLowerCase().match(this.searchTerm.toLocaleLowerCase());
  //     })
  //   }
  // }
}
