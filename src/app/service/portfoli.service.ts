import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StockApi } from '../junaid/models/stockApi.model';

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
  
}
