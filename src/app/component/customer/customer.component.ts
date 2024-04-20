import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../_service/master.service';
import { Posts } from '../../../_model/posts';
import { Customer } from '../../../_model/Customer';
import { MaterialModule } from '../../../_module/Material.Module';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  constructor(private service: MasterService) {}

  customerdata!: Customer[];
  datasource: any;
  displayColums: string[] = ['code', 'name', 'email', 'phone'];
  ngOnInit(): void {
    this.LoadInitialData();
  }

  LoadInitialData() {
    this.service.GetAllCustomer().subscribe((item) => {
      this.customerdata = item;
      this.datasource = new MatTableDataSource(this.customerdata);
    });
  }
}
