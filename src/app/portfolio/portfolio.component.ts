import { Component } from '@angular/core';
import { PortfoliService } from '../service/portfoli.service';
import { Bond } from '../vinisha/models/bond.model';
import { MutualFund } from '../vinisha/models/mutualfund.model';
import { Commodity } from '../vinisha/models/commodity.model';
import { RealEstate } from '../vinisha/models/realestate.model';
import { StockApi } from '../junaid/models/stockApi.model';

import { StockdetailsComponent } from '../junaid/stockdetails/stockdetails.component';
import { StockService } from '../junaid/services/stock.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  constructor(private _portServ:PortfoliService , private _stockServ:StockService){}

  stockCurPrice:number=0
  chnge:number=0;
  indx:number=0;
  purStocks:StockApi[]=[];
  curPriceArray=new StockApi()
  purBonds:Bond[]=[];
  purFund:MutualFund[]=[];
  purCommodities:Commodity[]=[]
  purRealEstate:RealEstate[]=[]

ngOnInit(){
  this.getStock()
  this.getBond()
  this.getCom()
  this.getFund()
  this.getRE()
}
analyse(item:StockApi,ind:number){
  this.indx=ind
  this._stockServ.getDay(item.symbol,new Date()).subscribe(
    data=>{
      let dat=JSON.parse(JSON.stringify( data.values))
      this.curPriceArray=dat[0]
      this.stockCurPrice=this.curPriceArray.close
      this.chnge=item.close-this.stockCurPrice
    }
  )

}

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

  //==========SELL=================

  sellStock(item:StockApi){
    let tok=localStorage.getItem('token')
    let mail=localStorage.getItem('userName')
    if(tok!=null && mail!=null){
      this._portServ.sellStock(tok,item).subscribe(
        data=>{
          alert('stock sold')
          window.location.reload()
        }
      )
    }
    
  }

  sellBond(item:Bond){
    let tok=localStorage.getItem('token')
    let mail=localStorage.getItem('userName')
    if(tok!=null && mail!=null){
      this._portServ.sellBond(tok,item).subscribe(
        data=>{
          alert('stock sold')
          window.location.reload()
        }
      )
    }
  }

  sellFund(item:MutualFund){
    let tok=localStorage.getItem('token')
    let mail=localStorage.getItem('userName')
    if(tok!=null && mail!=null){
      this._portServ.sellFund(tok,item).subscribe(
        data=>{
          alert('stock sold')
          window.location.reload()
        }
      )
    }
  }

  sellCom(item:Commodity){
    let tok=localStorage.getItem('token')
    let mail=localStorage.getItem('userName')
    if(tok!=null && mail!=null){
      this._portServ.sellCom(tok,item).subscribe(
        data=>{
          alert('stock sold')
          window.location.reload()
        }
      )
    }
  }

  sellRE(item:RealEstate){
    let tok=localStorage.getItem('token')
    let mail=localStorage.getItem('userName')
    if(tok!=null && mail!=null){
      this._portServ.sellRE(tok,item).subscribe(
        data=>{
          alert('stock sold')
          window.location.reload()
        }
      )
    }
  }
}
