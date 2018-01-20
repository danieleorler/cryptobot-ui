import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CryptocurrencyComponent } from './cryptocurrency/cryptocurrency.component';


@NgModule({
  declarations: [
    AppComponent,
    CryptocurrencyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
