import { Component } from '@angular/core';
import { MutualFund } from '../models/mutualfund.model';
@Component({
  selector: 'app-mirae-details',
  templateUrl: './mirae-details.component.html',
  styleUrls: ['./mirae-details.component.css']
})
export class MiraeDetailsComponent {
  fund=new MutualFund();
  changeVolume(){
    this.fund.volume=prompt("Enter the number of volumes you want to buy")
  }
}
