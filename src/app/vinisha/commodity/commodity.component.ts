import { Component } from '@angular/core';
import { CommodityService } from '../services/comodity.service';
import { Commodity } from '../models/commodity.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.css']
})
export class CommodityComponent {
  constructor(private _commoditySrv:CommodityService){}
 
  commodity:Commodity[]=[]
  commodityVar=new Commodity;
  // volume:number=0;
 
  isButtonDisabled=true;
  volumeStr:any;
  ngOnInit(){
    let tok=localStorage.getItem('token')
    if(tok!=null){
      this._commoditySrv.getCommodities(tok).subscribe(
        data=>{
          this.commodity=data;
        },
        error=>{
          console.log(error)
        }
      )
    }
  }
  changeVolume(item:Commodity){
    item.volume=prompt("Enter the volume you want to buy")
    let tok=localStorage.getItem('token')
    let mail=localStorage.getItem('userName')
    if(tok!=null && mail!=null){
      this._commoditySrv.postCommodities(item,tok,mail).subscribe(
        data=>{
          alert('commodity purchased with '+item.volume+' volume')
        },
        error=>{
          console.log(error)
        }
      )
  }
}
  inputBuyDisplay(com:Commodity) {
    
    this.volumeStr= prompt("Enter the volume you want to Buy");
    console.log(this.volumeStr)
    com.volume=this.volumeStr
    console.log(com)
    if(this.volumeStr>0 && com.commodityId)
    this.isButtonDisabled=false
  }
 
  inputSellDisplay(){
   
    
    this.volumeStr = prompt("Enter the volume you want to Sell");
   
  }
  
}
