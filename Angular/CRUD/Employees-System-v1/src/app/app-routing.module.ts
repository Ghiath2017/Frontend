import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { EmployeeDetailsGuard } from './employees/employee-details.guard';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomePapeComponent } from './welcome-pape/welcome-pape.component';

const routes: Routes = [
  { path: 'home', component: WelcomePapeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'employee/edit/:id', component: EditEmployeeComponent },
  { path: 'employee/add/:id', component: EditEmployeeComponent },
  { path: 'employees-list', component: EmployeesListComponent },
  {
    path: 'employee-details/:id',
    canActivate: [EmployeeDetailsGuard],
    component: EmployeeDetailsComponent,
  },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}