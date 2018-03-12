import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';
import { DataManagerService } from '../../data-manager.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.css']
})
export class CustomersEditComponent implements OnInit {
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
