import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StockApi } from '../junaid/models/stockApi.model';
import { Bond } from '../vinisha/models/bond.model';
import { MutualFund } from '../vinisha/models/mutualfund.model';
import { Commodity } from '../vinisha/models/commodity.model';
import { RealEstate } from '../vinisha/models/realestate.model';

@Injectable({
  providedIn: 'root'
})
export class PortfoliService {

  constructor(private _http:HttpClient) { }

  //http://localhost:5555/stock/stock

  getStock(token:string,mail:string){
    let mytoken='Bearer '+token
    let head=new HttpHeaders().set('Authorization',mytoken)
    return this._http.get<StockApi>(`http://localhost:5555/stock/stock/${mail}`,{headers:head})
  }
  getBond(token:string,mail:string){
    let mytoken='Bearer '+token
    let head=new HttpHeaders().set('Authorization',mytoken)
    return this._http.get<StockApi>(`http://localhost:5555/finport/bond/getBond/${mail}`,{headers:head})
  }
  getFund(token:string,mail:string){
    let mytoken='Bearer '+token
    let head=new HttpHeaders().set('Authorization',mytoken)
    return this._http.get<StockApi>(`http://localhost:5555/finport/mutualfund/getmutualfunds/${mail}`,{headers:head})
  }
  getCom(token:string,mail:string){
    let mytoken='Bearer '+token
    let head=new HttpHeaders().set('Authorization',mytoken)
    return this._http.get<StockApi>(`http://localhost:5555/finport/commodity/getCommodity/${mail}`,{headers:head})
  }
  getRE(token:string,mail:string){
    let mytoken='Bearer '+token
    let head=new HttpHeaders().set('Authorization',mytoken)
    return this._http.get<StockApi>(`http://localhost:5555/finport/realestate/getAllRealEstate/${mail}`,{headers:head})
  }
  
  //=============SELL==============

  sellStock(token:string,item:StockApi){
    let mytoken='Bearer '+token
    let head=new HttpHeaders().set('Authorization',mytoken)
    return this._http.delete<StockApi>(`http://localhost:5555/stock/sellStock`,{headers:head,body:item})
  }

  sellBond(token:string,item:Bond){
    let mytoken='Bearer '+token
    let head=new HttpHeaders().set('Authorization',mytoken)
    return this._http.delete<Bond>(`http://localhost:5555/finport/bond/sellBond`,{headers:head,body:item})
  }

  sellFund(token:string,item:MutualFund){
    let mytoken='Bearer '+token
    let head=new HttpHeaders().set('Authorization',mytoken)
    return this._http.delete<MutualFund>(`http://localhost:5555/finport/mutualfund/sellFund`,{headers:head,body:item})
  }

  sellCom(token:string,item:Commodity){
    let mytoken='Bearer '+token
    let head=new HttpHeaders().set('Authorization',mytoken)
    return this._http.delete<Commodity>(`http://localhost:5555/finport/commodity/sellCommodity`,{headers:head,body:item})
  }

  sellRE(token:string,item:RealEstate){
    let mytoken='Bearer '+token
    let head=new HttpHeaders().set('Authorization',mytoken)
    return this._http.delete<RealEstate>(`http://localhost:5555/finport/realestate/sellRE`,{headers:head,body:item})
  }
}
