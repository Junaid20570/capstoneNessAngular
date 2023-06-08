import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RealEstate } from '../models/realestate.model';

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {

  constructor(private _http:HttpClient) { }
  getRealEstateDetails(token:string){
    let mytoken='Bearer '+token
    let head=new HttpHeaders().set('Authorization',mytoken)
    return this._http.get<RealEstate[]>("http://localhost:5555/finvest/realestate/getAllRealEstate",{headers:head});
  }

  postRE(bond:RealEstate,token:string,mail:string){
    let mytoken='Bearer '+token
    let head=new HttpHeaders().set('Authorization',mytoken)
    return this._http.post<RealEstate>(`http://localhost:5555/finport/realestate/saveRealEstate/${mail}`, bond, {headers:head})
  }
}
