import { Component } from '@angular/core';
import { MutualFund } from '../models/mutualfund.model';

@Component({
  selector: 'app-iti-details',
  templateUrl: './iti-details.component.html',
  styleUrls: ['./iti-details.component.css']
})
export class ItiDetailsComponent {
  fund=new MutualFund();
  changeVolume(){
    this.fund.volume=prompt("Enter the volume you want to buy")
    console.log(this.fund.volume)
  }
}
