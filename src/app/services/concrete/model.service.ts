import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelDetail } from '../../models/details/modelDetail';
import { Model } from '../../models/entities/model';
import { ListResponseModel } from '../../models/listResponseModel';
import { ResponseModel } from '../../models/responseModel';
import { SingleResponseModel } from '../../models/singleResponseModel';
import { IModelService } from '../abstract/iModelService';

@Injectable({
  providedIn: 'root'
})

export class ModelService implements IModelService {

  baseUrl: string = 'https://localhost:7276/api/models/';

  constructor(private httpClient: HttpClient) { }

  getById(id: number): Observable<SingleResponseModel<Model>> {
    const path = this.baseUrl + "getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<Model>>(path);
  }


  getAll(): Observable<ListResponseModel<Model>> {
    const path = this.baseUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Model>>(path);
  }

  getAllModelLength(): Observable<SingleResponseModel<number>> {
    const path = this.baseUrl + 'getallmodellength';
    return this.httpClient.get<SingleResponseModel<number>>(path);
  }

  getModelDetailsById(id: number): Observable<SingleResponseModel<ModelDetail>> {
    const path = this.baseUrl + "getmodeldetailsbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<ModelDetail>>(path);
  }
  getAllModelDetails(): Observable<ListResponseModel<ModelDetail>> {
    const path = this.baseUrl + 'getallmodeldetails';
    return this.httpClient.get<ListResponseModel<ModelDetail>>(path);
  }

  add(model: Model): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "add", model);
  }

  update(model: Model): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "update", model);
  }

  delete(model: Model): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "delete", model);
  }

}
