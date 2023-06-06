import { Component } from '@angular/core';
import { MutualFund } from '../models/mutualfund.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  invest=new MutualFund();
  chartOptions = {
    animationEnabled: true,
    exportEnabled: true,
    title:{
      text: "Returns Based on Years of Investment",
      fontFamily: "Calibri, Arial, sans-serif"
    },
    axisX:{
      title: "Years of Investment",
      reversed: true
    },
    axisY:{
      title: "Investment and Profit",
      prefix: "Rs.",
      suffix: "k",
      includeZero: true
    },
    toolTip:  {
      shared: true
    },
    data: [{
      type: "stackedBar",
      name: "Investment",
      showInLegend: "true",
      yValueFormatString: "#,###k",
      color: "#edae49",
      dataPoints: [
        {  y: 120, label: "1Y"},
        {  y: 240, label: "2Y" },
        {  y: 360, label: "3Y" },
        {  y: 480, label: "4Y" },
        {  y: 600, label: "5Y" }
      ]
    }, 
    {
      type: "stackedBar",
      name: "Profit",
      showInLegend: "true",
      yValueFormatString: "#,###k",
      color: "#df7c52",
      dataPoints: [
        {y:16,label:" 1Y"},
        {  y: 70, label: "2Y"},
        {  y: 170, label: "3Y" },
        {  y: 333, label: "4Y" },
        {  y: 570, label: "5Y" },
      ]
    }
  
  ]
}
changeVolume(){
  this.invest.volume=prompt("Enter the number of volumes to invest")
}
}