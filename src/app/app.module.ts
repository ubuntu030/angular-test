import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { AppBootstrapModule } from "./app-bootstrap/app-bootstrap.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableInfoComponent } from './table-info/table-info.component';
import { DownloadApprovalComponent } from './download-approval/download-approval.component';

@NgModule({
  declarations: [
    AppComponent,
    TableInfoComponent,
    DownloadApprovalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppBootstrapModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [BsDatepickerConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
