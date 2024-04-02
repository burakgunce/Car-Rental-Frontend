import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../../models/entities/color';
import { ListResponseModel } from '../../models/listResponseModel';
import { ResponseModel } from '../../models/responseModel';
import { SingleResponseModel } from '../../models/singleResponseModel';
import { IColorService } from '../abstract/iColorService';

@Injectable({
  providedIn: 'root'
})
export class ColorService implements IColorService {

  baseUrl: string = 'https://localhost:7276/api/colors/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Color>> {
    const path = this.baseUrl + "getall";
    return this.httpClient.get<ListResponseModel<Color>>(path);
  }

  getAllColorLength(): Observable<SingleResponseModel<number>> {
    const path = this.baseUrl + 'getallcolorlength';
    return this.httpClient.get<SingleResponseModel<number>>(path);
  }

  getById(id: number): Observable<SingleResponseModel<Color>> {
    const path = this.baseUrl + "getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<Color>>(path);
  }

  add(color: Color): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "add", color);
  }

  update(color: Color): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "update", color);
  }

  delete(color: Color): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "delete", color);
  }

}
