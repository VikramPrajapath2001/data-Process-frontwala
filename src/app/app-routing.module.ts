import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeListComponent } from './components/college-list/college-list.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { BatchListComponent } from './components/batch-list/batch-list.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { OverviewComponent } from './components/overview/overview.component';

const routes: Routes = [
  { path: '', redirectTo: '/colleges', pathMatch: 'full' },
  { path: 'colleges', component: CollegeListComponent },
  { path: 'departments/:collegeId', component: DepartmentListComponent },
  { path: 'batches/:id', component: BatchListComponent },
  { path: 'upload', component: FileUploadComponent },
  { path: 'overview', component: OverviewComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
