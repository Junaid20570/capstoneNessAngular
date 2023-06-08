import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bond } from '../models/bond.model';

@Injectable({
  providedIn: 'root'
})
export class BondService {

  constructor(private _http:HttpClient) { }
  getBondDetails(token:string){
    let mytoken='Bearer '+token
    let head=new HttpHeaders().set('Authorization',mytoken)
    return this._http.get<Bond[]>("http://localhost:5555/finvest/bond/getBond",{headers:head});
  }
  postBond(bond:Bond,token:string,mail:string){
    let mytoken='Bearer '+token
    let head=new HttpHeaders().set('Authorization',mytoken)
    return this._http.post<Bond>(`http://localhost:5555/finport/bond/saveBond/${mail}`, bond, {headers:head})
  }
}
