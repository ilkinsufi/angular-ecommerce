import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../_service/master.service';
import { Posts } from '../../../_model/posts';
import { Customer } from '../../../_model/Customer';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  constructor(private service: MasterService) {}
  customerdata!: Customer[];
  ngOnInit(): void {
    this.LoadInitialData();
  }

  LoadInitialData() {
    this.service.GetAllCustomer().subscribe((item) => {
      this.customerdata = item;
      console.log(this.customerdata);
    });
  }
}
