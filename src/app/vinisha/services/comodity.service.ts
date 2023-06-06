import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Commodity } from '../models/commodity.model';

@Injectable({
  providedIn: 'root'
})
  export class CommodityService {
    constructor(private _http:HttpClient) { }
  
    getCommodities(){
      return this._http.get<Commodity[]>("http://localhost:1234/commodity/getCommodity");
    }
  }