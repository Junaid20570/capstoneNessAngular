import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MutualFund } from '../models/mutualfund.model';

@Injectable({
  providedIn: 'root'
})
export class MutualfundService {

  constructor(private _http:HttpClient) { }
  getMutualFunds(){
   return  this._http.get<MutualFund[]>("http://localhost:1234/mutualfund/getmutualfunds")
  }
}
