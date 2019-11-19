import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NfComponent } from './nf/nf.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NfComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
