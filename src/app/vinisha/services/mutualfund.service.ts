import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MutualFund } from '../models/mutualfund.model';

@Injectable({
  providedIn: 'root'
})
export class MutualfundService {

  constructor(private _http:HttpClient) { }
  getMutualFunds(token:string){
    let mytoken='Bearer '+token
    let head=new HttpHeaders().set('Authorization',mytoken)
   return  this._http.get<MutualFund[]>("http://localhost:5555/finvest/mutualfund/getmutualfunds",{headers:head})
  }

  postFunds(bond:MutualFund,token:string,mail:string){
    let mytoken='Bearer '+token
    let head=new HttpHeaders().set('Authorization',mytoken)
    return this._http.post<MutualFund>(`http://localhost:5555/finport/mutualfund/saveFund/${mail}`, bond, {headers:head})
  }
}
