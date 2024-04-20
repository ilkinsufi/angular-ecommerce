import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../_service/master.service';
import { Posts } from '../../../_model/posts';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  constructor(private service: MasterService) {}
  postsdata!: Posts[];
  ngOnInit(): void {
    this.LoadInitialData();
  }

  LoadInitialData() {
    this.service.getAll().subscribe((item) => {
      this.postsdata = item;
      console.log(this.postsdata);
    });
  }
}
