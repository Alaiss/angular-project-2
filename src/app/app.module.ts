import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

import { DataManagerService } from './data-manager.service';

import { HighlightDirective } from './highlight.directive';

import { AppComponent } from './app.component';
import { HeadingComponent } from './components/heading/heading.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { CustomersTableComponent } from './components/customers-table/customers-table.component';
import { CustomersDetailComponent } from './components/customers-detail/customers-detail.component';
import { CustomersDeleteComponent } from './components/customers-delete/customers-delete.component';
import { CustomersCreateComponent } from './components/customers-create/customers-create.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CustomersTableComponent,
    CustomersDetailComponent,
    CustomersDeleteComponent,
    CustomersCreateComponent,
    CustomersEditComponent,
    NotFoundComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
