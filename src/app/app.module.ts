import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { CryptocurrencyComponent } from './cryptocurrency/cryptocurrency.component';


@NgModule({
  declarations: [
    AppComponent,
    CryptocurrencyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
