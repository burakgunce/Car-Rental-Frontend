import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelColorDetail } from '../../models/details/modelColorDetail';
import { ModelColor } from '../../models/entities/modelColor';
import { ListResponseModel } from '../../models/listResponseModel';
import { ResponseModel } from '../../models/responseModel';
import { SingleResponseModel } from '../../models/singleResponseModel';
import { IModelColorService } from '../abstract/iModelColorService';

@Injectable({
  providedIn: 'root'
})

export class ModelColorService implements IModelColorService {

  baseUrl: string = 'https://localhost:7276/api/modelcolors/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<ModelColor>> {
    const path = this.baseUrl + "getall";
    return this.httpClient.get<ListResponseModel<ModelColor>>(path);
  }

  getById(id: number): Observable<SingleResponseModel<ModelColor>> {
    const path = this.baseUrl + "getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<ModelColor>>(path);
  }

  add(modelColor: ModelColor): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "add", modelColor);
  }

  update(modelColor: ModelColor): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "update", modelColor);
  }

  delete(modelColor: ModelColor): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "delete", modelColor);
  }

  getModelColorDetailsById(id: number): Observable<SingleResponseModel<ModelColorDetail>> {
    const path = this.baseUrl + "getmodelcolordetailsbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<ModelColorDetail>>(path);
  }

  getAllModelColorDetails(): Observable<ListResponseModel<ModelColorDetail>> {
    const path = this.baseUrl + 'getallmodelcolordetails';
    return this.httpClient.get<ListResponseModel<ModelColorDetail>>(path);
  }

}
