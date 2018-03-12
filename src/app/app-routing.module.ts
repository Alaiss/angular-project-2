import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CustomersTableComponent } from './components/customers-table/customers-table.component';
import { CustomersDetailComponent } from './components/customers-detail/customers-detail.component';
import { CustomersDeleteComponent } from './components/customers-delete/customers-delete.component';
import { CustomersCreateComponent } from './components/customers-create/customers-create.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

/*The sequence in which the routes appear matters - make sure that you place the empty 
  route and the not found route at the end of the array */
const routes: Routes = [
  { path: 'home', component: CustomersTableComponent },
  { path: 'customers', component: CustomersTableComponent },
  { path: 'customercreate', component: CustomersCreateComponent },
  { path: 'customerdelete/:id', component: CustomersDeleteComponent },
  { path: 'customerdetail/:id', component: CustomersDetailComponent },
  { path: 'customeredit/:id', component: CustomersEditComponent },  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
