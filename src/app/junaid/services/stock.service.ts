import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StockApi } from '../models/stockApi.model';
import { Stocks } from '../models/stocks.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private _http:HttpClient) { }
  getApi(sym:string){
    return this._http.get<StockApi[]>(`https://api.twelvedata.com/time_series?symbol=${sym}&interval=15min&apikey=0975893c35e04bc59419ad713796a678`)
  }
  getStocks(con:string){
    return this._http.get<Stocks[]>(`https://api.twelvedata.com/stocks?country=${con}`)
  }
  getDay(sym:string,strt:Date){
    return this._http.get<StockApi[]>(`https://api.twelvedata.com/time_series?symbol=${sym}&interval=15min&date=${strt}&apikey=0975893c35e04bc59419ad713796a678`)
  }

  postStock(stock:StockApi,nam:string,token:string,mail:string){
    let mytoken='Bearer '+token
    let head=new HttpHeaders().set('Authorization',mytoken)
    return this._http.post<StockApi>(`http://localhost:5555/stock/stock/${nam}/${mail}`,stock,{headers:head})
  }
}
