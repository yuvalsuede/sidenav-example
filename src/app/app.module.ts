import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import 'hammerjs';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./pages/login/login.component";

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent
  ],
  imports: [
    BrowserModule,

    CoreModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1500, passThruUnknownUrl :true }),

    AppRoutingModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
