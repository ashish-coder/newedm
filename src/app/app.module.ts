import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FileDropModule } from 'ngx-file-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {AppService} from './app.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      HttpClientModule,
      HttpModule,
      FileDropModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
