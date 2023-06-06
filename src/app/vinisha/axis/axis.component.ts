import { Component } from '@angular/core';
import { MutualFund } from '../models/mutualfund.model';

@Component({
  selector: 'app-axis',
  templateUrl: './axis.component.html',
  styleUrls: ['./axis.component.css']
})
export class AxisComponent {
  fund=new MutualFund();
    changeVolume(){
     this.fund.volume=prompt("Enter the volume you want to buy");
     console.log(this.fund.volume)
    }
}
