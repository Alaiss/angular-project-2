import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';
import { DataManagerService } from '../../data-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.css']
})
export class CustomersTableComponent implements OnInit {

  private customers: Customer[];
  private selectedCust: Customer;
  // Assuming that the component 
  // has a property/field named "customers"...
  constructor(private m: DataManagerService,
              private router: Router) {
  // Fetch the customers from the service,
  // and assign the value to the class property "customers"
  this.customers = this.m.getCustomers();
  }

  ngOnInit() {
  }
  
  selectRow(c: Customer) {
    this.selectedCust = c;
    // console.log(this.selectedCust);
    let findCust = this.m.getCustomer(c.id);
    this.router.navigate(['/customerdetail', c.id])
  } 

}
