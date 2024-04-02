import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserForInfoDetail } from '../../models/details/userForInfoDetail';
import { ListResponseModel } from '../../models/listResponseModel';
import { SingleResponseModel } from '../../models/singleResponseModel';
import { IUserService } from '../abstract/iUserService';

@Injectable({
  providedIn: 'root'
})

export class UserService implements IUserService {

  baseUrl: string = 'https://localhost:7276/api/users/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<UserForInfoDetail>> {
    const path = this.baseUrl + "getall";
    return this.httpClient.get<ListResponseModel<UserForInfoDetail>>(path);
  }

  getById(id: number): Observable<SingleResponseModel<UserForInfoDetail>> {
    const path = this.baseUrl + "getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<UserForInfoDetail>>(path);
  }

}
