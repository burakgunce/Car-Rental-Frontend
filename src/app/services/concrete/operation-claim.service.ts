import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OperationClaim } from '../../models/entities/operationClaim';
import { ListResponseModel } from '../../models/listResponseModel';
import { ResponseModel } from '../../models/responseModel';
import { SingleResponseModel } from '../../models/singleResponseModel';
import { IOperationClaimService } from '../abstract/iOperationClaimService';

@Injectable({
  providedIn: 'root'
})

export class OperationClaimService implements IOperationClaimService {

  baseUrl: string = 'https://localhost:7276/api/operationclaims/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<OperationClaim>> {
    const path = this.baseUrl + "getall";
    return this.httpClient.get<ListResponseModel<OperationClaim>>(path);
  }

  getById(id: number): Observable<SingleResponseModel<OperationClaim>> {
    const path = this.baseUrl + "getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<OperationClaim>>(path);
  }

  add(operationClaim: OperationClaim): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "add", operationClaim);
  }

  update(operationClaim: OperationClaim): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "update", operationClaim);
  }

  delete(operationClaim: OperationClaim): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "delete", operationClaim);
  }

}
