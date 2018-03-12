import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';
import { DataManagerService } from '../../data-manager.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers-delete',
  templateUrl: './customers-delete.component.html',
  styleUrls: ['./customers-delete.component.css']
})
export class CustomersDeleteComponent implements OnInit {

  public customer: Customer;

  constructor(public m: DataManagerService,
              public router: Router,
              public route: ActivatedRoute) 
              { 
                let id = this.route.snapshot.params['id'];
                this.customer = m.getCustomer(id);
              }

  ngOnInit() {
  }

}
