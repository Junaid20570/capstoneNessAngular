import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RealEstate } from '../models/realestate.model';

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {

  constructor(private _http:HttpClient) { }
  getRealEstateDetails(){
    return this._http.get<RealEstate[]>("http://localhost:1234/realestate/getAllRealEstate");
  }
}
