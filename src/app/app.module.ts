import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { BatchListComponent } from './components/batch-list/batch-list.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { CollegeListComponent } from './components/college-list/college-list.component';
import { FormsModule } from '@angular/forms';
import { OverviewComponent } from './components/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegeListComponent,
    DepartmentListComponent,
    BatchListComponent,
    FileUploadComponent,
    OverviewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
