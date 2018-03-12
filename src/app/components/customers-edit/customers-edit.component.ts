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
  private customer: Customer;

  constructor(private m: DataManagerService,
              private router: Router,
              private route: ActivatedRoute) 
              {
                let id = this.route.snapshot.params['id'];
                this.customer = m.getCustomer(id);
               }
               
  ngOnInit() {
  }

}
