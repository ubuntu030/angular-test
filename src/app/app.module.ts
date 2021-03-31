import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppBootstrapModule } from "./app-bootstrap/app-bootstrap.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableInfoComponent } from './table-info/table-info.component';
import { DownloadApplicationComponent } from './download-application/download-application.component';

@NgModule({
  declarations: [
    AppComponent,
    TableInfoComponent,
    DownloadApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
