import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bond } from '../models/bond.model';

@Injectable({
  providedIn: 'root'
})
export class BondService {

  constructor(private _http:HttpClient) { }
  getBondDetails(){
    return this._http.get<Bond[]>("http://localhost:1234/bond/getBond");
  }
  postBond(bond:Bond){
    return this._http.post<Bond>("http://localhost:1234/bond/buyBond", bond, {responseType: 'text' as 'json'})
  }
}
