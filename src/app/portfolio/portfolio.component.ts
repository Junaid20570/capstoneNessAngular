import { Component } from '@angular/core';
import { PortfoliService } from '../service/portfoli.service';
import { Bond } from '../vinisha/models/bond.model';
import { MutualFund } from '../vinisha/models/mutualfund.model';
import { Commodity } from '../vinisha/models/commodity.model';
import { RealEstate } from '../vinisha/models/realestate.model';
import { StockApi } from '../junaid/models/stockApi.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  constructor(private _portServ:PortfoliService){}
  
ngOnInit(){
  this.getStock()
  this.getBond()
  this.getCom()
  this.getFund()
  this.getRE()
}

  purStocks:StockApi[]=[];
  purBonds:Bond[]=[];
  purFund:MutualFund[]=[];
  purCommodities:Commodity[]=[]
  purRealEstate:RealEstate[]=[]
  getStock(){
    let tok=localStorage.getItem('token')
    let mail=localStorage.getItem('userName')
    if(tok!=null && mail!=null){
      this._portServ.getStock(tok,mail).subscribe(
        data=>{
          this.purStocks=JSON.parse(JSON.stringify(data));
        }
      )
    }
  }
  getBond(){
    let tok=localStorage.getItem('token')
    let mail=localStorage.getItem('userName')
    if(tok!=null && mail!=null){
      this._portServ.getBond(tok,mail).subscribe(
        data=>{
          this.purBonds=JSON.parse(JSON.stringify(data));
        }
      )
    }
  }
  getFund(){
    let tok=localStorage.getItem('token')
    let mail=localStorage.getItem('userName')
    if(tok!=null && mail!=null){
      this._portServ.getFund(tok,mail).subscribe(
        data=>{
          this.purFund=JSON.parse(JSON.stringify(data));
        }
      )
    }
  }
  getCom(){
    let tok=localStorage.getItem('token')
    let mail=localStorage.getItem('userName')
    if(tok!=null && mail!=null){
      this._portServ.getCom(tok,mail).subscribe(
        data=>{
          this.purCommodities=JSON.parse(JSON.stringify(data));
        }
      )
    }
  }
  getRE(){
    let tok=localStorage.getItem('token')
    let mail=localStorage.getItem('userName')
    if(tok!=null && mail!=null){
      this._portServ.getRE(tok,mail).subscribe(
        data=>{
          this.purRealEstate=JSON.parse(JSON.stringify(data));
        }
      )
    }
  }


}
