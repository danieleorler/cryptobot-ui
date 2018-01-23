import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import {CryptoCurrency} from './CryptoCurrency';

@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.css']
})
export class CryptocurrencyComponent implements OnInit {

  private priceChart = null;

  constructor(private http: HttpClient) { }

  private getCryptoCurrency(symbol : string) {
    this.http.get<CryptoCurrency>("http://localhost:8080/v1/api/crypto/"+symbol)
    .subscribe(
      data => {
        let chart = {
          chartType: "LineChart",
          options: {
            title: data.symbol,
            height: "500px",
          },
          dataTable: [],
          formatters: [
            {
              columns: [1,2,3],
              type: "NumberFormat",
              options: {
                fractionDigits: 8
              }
            }
          ]
        }
        console.log(data);
        let analysis = data.analysis;
        chart.dataTable.push(["time", "EMA(24)", "EMA(6)", "price"]);
        let time = moment().subtract(24, "hours");
        for(let i=0; i<analysis.ema24h.length; i++) {
          chart.dataTable.push([time.toDate(), analysis.ema24h[i], analysis.ema6h[i], analysis.prices24[i]]);
          time.add(1, "minutes");
        }
        this.priceChart = chart;
      },
      error => {
        console.error(error);
      }
    )
  }

  ngOnInit() {
    this.getCryptoCurrency("XRPBTC");
  }

}
