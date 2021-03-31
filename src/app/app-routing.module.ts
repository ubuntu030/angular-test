import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { DownloadApplicationComponent } from "./download-application/download-application.component";
import { DownloadApprovalComponent } from "./download-approval/download-approval.component";
import { TableInfoComponent } from "./table-info/table-info.component";

const routes: Routes = [
  {path:'', redirectTo: '/download', pathMatch: 'full'},
  { path: 'download', component: TableInfoComponent },
  { path: 'approval', component: DownloadApprovalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
