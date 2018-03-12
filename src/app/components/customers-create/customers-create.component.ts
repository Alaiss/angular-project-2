import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';
import { DataManagerService } from '../../data-manager.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers-create',
  templateUrl: './customers-create.component.html',
  styleUrls: ['./customers-create.component.css']
})
export class CustomersCreateComponent implements OnInit {

  private newcust:Customer;

  constructor(private m: DataManagerService,
              private router: Router,
              private route: ActivatedRoute) 
              { 
                this.newcust={id:null, firstname:"", lastname:"", city:"", birthdate:"", email:"", website:"", credits:0};
              }

  ngOnInit() {
  }

}
