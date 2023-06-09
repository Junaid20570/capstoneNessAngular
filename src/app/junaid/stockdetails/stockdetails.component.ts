import { Component } from '@angular/core';
import { StockService } from '../services/stock.service';
import { StockApi } from '../models/stockApi.model';

@Component({
  selector: 'app-stockdetails',
  templateUrl: './stockdetails.component.html',
  styleUrls: ['./stockdetails.component.scss']
})
export class StockdetailsComponent {
  dataPoints:any = [];
  chart:any;
  pagination: number=0;
  siNo: number=0;
  change :number=10;
  // static curPrice:number
  constructor(private _serv:StockService){}
  usr:string=''
  stockApi:StockApi[]=[]
  stockApiDay:StockApi[]=[]
  buyStocks:StockApi[]=[]
  symbol:string | undefined |null
  name:string=''
  chartType:string='splineArea'
  date=new Date()
  ngOnInit(){
    this.symbol=sessionStorage.getItem('sym')
    let n=sessionStorage.getItem('name')
    let user=localStorage.getItem('user')
    if(user!=null){
      this.usr=user
    }
    if(n!=null ){
      this.name=n
      console.log(this.name)
    }
    if(this.symbol!=null){
    this._serv.getApi(this.symbol).subscribe(data=>{
      this.stockApi=JSON.parse(JSON.stringify( data.values))
      this.buyStocks=this.stockApi
      // StockdetailsComponent.curPrice=this.buyStocks[0].close
      // console.log('curent price is '+this.buyStocks[0].close)
      console.log(this.stockApi)
      this.view()
    })    
  } 
  }
  buyStock(){
    let item=this.buyStocks[0]
    if(this.symbol!=null){
      item.symbol=this.symbol
    }
    console.log(item.datetime)
    let dt=JSON.stringify(item.datetime).replace(" ","T")
    console.log(dt)
    item.datetime=JSON.parse(dt)
    let tok=localStorage.getItem('token')
    let emal=localStorage.getItem('userName')
    if(tok!=null && emal!=null){
      this._serv.postStock(item,this.name,tok,emal).subscribe(
        data=>{
          alert('stocks purchased successfully')
        }
      )
    }
 
  }
  getDet(){
    // console.log(this.endDate)
    if(this.symbol!=null){
      console.log(this.date)
      
      this._serv.getDay(this.symbol,this.date).subscribe(data=>{
        this.stockApiDay=JSON.parse(JSON.stringify( data.values))
        console.log(this.stockApiDay)
        this.stockApi=this.stockApiDay
        
        this.view()
      })
    }
    
  }
  getevent(page:number){
    this.pagination=page
    //this.siNo=(page-1)*10
  }
  refresh(){
    window.location.reload()
  }
  chartOptions = {
    theme: "light2",
    zoomEnabled: true,
    exportEnabled: true,
    title: {
      text:this.name
    },
    subtitles: [{
      text: "Loading Data...",
      fontSize: 24,
      horizontalAlign: "center",
      verticalAlign: "center",
      dockInsidePlotArea: true
    }],
    axisY: {
      title: "Current Price (in USD)",
      prefix: "$"
    },
    data: [{
      type: this.chartType,
      name: "Current Price",
      yValueFormatString: "$#,###.00",
      xValueType: "dateTime",
		  xValueFormatString: "DD MMM YY HH:mm",
      dataPoints: this.dataPoints,
    }]
  }
 
  getChartInstance(chart: object) {
    this.chart = chart;
  }
  
  view() {
    
    this.dataPoints=[]; 

    for(let i = 0; i < this.stockApi.length; i++){
      this.dataPoints.push({x: new Date(this.stockApi[i].datetime), y: Number(this.stockApi[i].open) });
    }

    //this.chart.subtitles[0].remove();
  }
  lineChart(){
    this.chartType='line'
    console.log(this.chartType);
    this.chartOptions = {
      theme: "light2",
      zoomEnabled: true,
      exportEnabled: true,
      title: {
        text:this.name
      },
      subtitles: [{
        text: "",
        fontSize: 24,
        horizontalAlign: "center",
        verticalAlign: "center",
        dockInsidePlotArea: true
      }],
      axisY: {
        title: "Current Price (in USD)",
        prefix: "$"
      },
      data: [{
        type: this.chartType,
        name: "Current Price",
        yValueFormatString: "$#,###.00",
        dataPoints: this.dataPoints,
        xValueType: "dateTime",
        xValueFormatString: "DD MMM YY HH:mm",
      }]
    }
  }
  barChart(){
    this.chartType='column'
    console.log(this.chartType);

    this.chartOptions = {
      theme: "light2",
      zoomEnabled: true,
      exportEnabled: true,
      title: {
        text:this.name
      },
      subtitles: [{
        text: "",
        fontSize: 24,
        horizontalAlign: "center",
        verticalAlign: "center",
        dockInsidePlotArea: true
      }],
      axisY: {
        title: "Current Price (in USD)",
        prefix: "$"
      },
      data: [{
        type: this.chartType,
        name: "Current Price",
        yValueFormatString: "$#,###.00",
        dataPoints: this.dataPoints,
        xValueType: "dateTime",
        xValueFormatString: "DD MMM YY HH:mm",
      }]
    }
  }
  pieChart(){
    this.chartType='pie'
    console.log(this.chartType);

    this.chartOptions = {
      theme: "light2",
      zoomEnabled: true,
      exportEnabled: true,
      title: {
        text:this.name
      },
      subtitles: [{
        text: "",
        fontSize: 24,
        horizontalAlign: "center",
        verticalAlign: "center",
        dockInsidePlotArea: true
      }],
      axisY: {
        title: "Current Price (in USD)",
        prefix: "$"
      },
      data: [{
        type: this.chartType,
        name: "Current Price",
        yValueFormatString: "$#,###.00",
        // xValueType: "this.stock[1].currentPrice",
        dataPoints: this.dataPoints,
        xValueType: "dateTime",
        xValueFormatString: "DD MMM YY HH:mm",
      }]
    }
  }
}
