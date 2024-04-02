import { Observable } from "rxjs";
import { ListResponseModel } from "../../models/listResponseModel";
import { Customer } from "../../models/entities/customer";
import { SingleResponseModel } from "../../models/singleResponseModel";
import { CustomerDetail } from "../../models/details/customerDetail";
import { ResponseModel } from "../../models/responseModel";

export interface ICustomerService {
    getAll(): Observable<ListResponseModel<Customer>>;
    getById(id: number): Observable<SingleResponseModel<Customer>>;
    getAllCustomerDetails(): Observable<ListResponseModel<CustomerDetail>>;
    getCustomerDetailsById(id: number): Observable<SingleResponseModel<CustomerDetail>>;
    add(customer: Customer): Observable<ResponseModel>;
    update(customer: Customer): Observable<ResponseModel>;
    delete(customer: Customer): Observable<ResponseModel>;
    getAllCustomerLength(): Observable<SingleResponseModel<number>>;
  }