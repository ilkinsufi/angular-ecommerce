import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from '../../_model/posts';
import { Customer } from '../../_model/Customer';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Posts[]>('http://localhost:3000/posts');
  }

  GetAllCustomer() {
    return this.http.get<Customer[]>('https://api.npoint.io/7c2f27991da2c806bc70');
  }
}
