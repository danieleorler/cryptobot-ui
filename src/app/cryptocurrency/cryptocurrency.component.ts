import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.css']
})
export class CryptocurrencyComponent implements OnInit {

  private priceChart = null;

  constructor(private http: HttpClient) { }

  private getCryptoCurrency(symbol : string) {
    this.http.get("http://localhost:8080/v1/api/crypto/"+symbol)
    .subscribe(
      data => {
        let chart = {
          chartType: "LineChart"
        }
        chart.options = {title: data.symbol};
        let diff : number = data.prices24h.length - data.prices6h.length;
        chart.dataTable = [["time", "24h", "6h"]];
        let time = moment().subtract(24, "hours");
        for(let i=0; i<data.prices24h.length; i++) {
          if(i < diff) {
            chart.dataTable.push([time.toDate(), data.prices24h[i], null]);
          } else {
            chart.dataTable.push([time.toDate(), data.prices24h[i], data.prices6h[i-diff]]);
          }
          time.add(1, "minutes");
        }
        this.priceChart = chart;
        console.log(chart);
        console.log(data);
      },
      error => {
        console.error(error);
      }
    )
  }

  ngOnInit() {
    this.getCryptoCurrency("CMTBTC");
  }

}
