import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Commodity } from '../models/commodity.model';

@Injectable({
  providedIn: 'root'
})
  export class CommodityService {
    constructor(private _http:HttpClient) { }
  
    getCommodities(token:string){
      let mytoken='Bearer '+token
      let head=new HttpHeaders().set('Authorization',mytoken)
      return this._http.get<Commodity[]>("http://localhost:5555/finvest/commodity/getCommodity",{headers:head});
      //localhost:5555/finvest/commodity/getCommodity
    }
    postCommodities(com:Commodity,token:string,mail:string){
      let mytoken='Bearer '+token
      let head=new HttpHeaders().set('Authorization',mytoken)
      return this._http.post<Commodity>(`http://localhost:5555/finport/commodity/saveCommodity/${mail}`, com, {headers:head})
    }
  }