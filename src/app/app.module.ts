import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule, BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import {
  BsDatepickerModule,
  BsDatepickerConfig,
} from 'ngx-bootstrap/datepicker';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableInfoComponent } from './table-info/table-info.component';
import { DownloadApprovalComponent } from './download-approval/download-approval.component';
import { MaintainComponent } from './maintain/maintain.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TableInfoComponent,
    DownloadApprovalComponent,
    MaintainComponent,
    SideMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppBootstrapModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule,
  ],
  providers: [BsDatepickerConfig, BsDropdownConfig],
  bootstrap: [AppComponent],
})
export class AppModule {}
