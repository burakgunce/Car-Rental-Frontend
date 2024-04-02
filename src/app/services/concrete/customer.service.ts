import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetail } from '../../models/details/customerDetail';
import { Customer } from '../../models/entities/customer';
import { ListResponseModel } from '../../models/listResponseModel';
import { ResponseModel } from '../../models/responseModel';
import { SingleResponseModel } from '../../models/singleResponseModel';
import { ICustomerService } from '../abstract/iCustomerService';

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements ICustomerService {

  baseUrl: string = 'https://localhost:7276/api/customers/';

  constructor(private httpClient: HttpClient) { }

  getById(id: number): Observable<SingleResponseModel<Customer>> {
    const path = this.baseUrl + "getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<Customer>>(path);
  }

  getCustomerDetailsById(id: number): Observable<SingleResponseModel<CustomerDetail>> {
    const path = this.baseUrl + "getcustomerdetailsbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<CustomerDetail>>(path);
  }

  getAll(): Observable<ListResponseModel<Customer>> {
    const path = this.baseUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Customer>>(path);
  }

  getAllCustomerLength(): Observable<SingleResponseModel<number>> {
    const path = this.baseUrl + 'getallcustomerlength';
    return this.httpClient.get<SingleResponseModel<number>>(path);
  }

  getAllCustomerDetails(): Observable<ListResponseModel<CustomerDetail>> {
    const path = this.baseUrl + 'getallcustomerdetails';
    return this.httpClient.get<ListResponseModel<CustomerDetail>>(path);
  }

  add(customer: Customer): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "add", customer);
  }

  update(customer: Customer): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "update", customer);
  }

  delete(customer: Customer): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "delete", customer);
  }

}
