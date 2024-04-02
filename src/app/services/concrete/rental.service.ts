import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetail } from '../../models/details/rentalDetail';
import { Rental } from '../../models/entities/rental';
import { ListResponseModel } from '../../models/listResponseModel';
import { ResponseModel } from '../../models/responseModel';
import { SingleResponseModel } from '../../models/singleResponseModel';
import { IRentalService } from '../abstract/iRentalService';

@Injectable({
  providedIn: 'root'
})

export class RentalService implements IRentalService {

  baseUrl: string = 'https://localhost:7276/api/rentals/';
  imageUrl = "https://localhost:7276";

  constructor(private httpClient: HttpClient) { }

  isCarAvailable(carId: number): Observable<SingleResponseModel<boolean>> {
    const path = this.baseUrl + "iscaravailable?carid=" + carId;
    return this.httpClient.get<SingleResponseModel<boolean>>(path);
  }

  getById(id: number): Observable<SingleResponseModel<Rental>> {
    const path = this.baseUrl + "getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<Rental>>(path);
  }

  getRentalDetailsById(id: number): Observable<SingleResponseModel<RentalDetail>> {
    const path = this.baseUrl + "getrentaldetailsbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<RentalDetail>>(path);
  }

  getAll(): Observable<ListResponseModel<Rental>> {
    const path = this.baseUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Rental>>(path);
  }

  getAllRentalLength(): Observable<SingleResponseModel<number>> {
    const path = this.baseUrl + 'getallrentallength';
    return this.httpClient.get<SingleResponseModel<number>>(path);
  }

  getAllRentalDetails(): Observable<ListResponseModel<RentalDetail>> {
    const path = this.baseUrl + 'getallrentaldetails';
    return this.httpClient.get<ListResponseModel<RentalDetail>>(path);
  }

  getAllRentalDetailsByCarId(carId: number): Observable<ListResponseModel<RentalDetail>> {
    const path = this.baseUrl + "getallrentaldetailsbycarid?carid=" + carId;
    return this.httpClient.get<ListResponseModel<RentalDetail>>(path);
  }

  getAllRentalDetailsByCustomerId(customerId: number): Observable<ListResponseModel<RentalDetail>> {
    const path = this.baseUrl + "getallrentaldetailsbycustomerid?customerid=" + customerId;
    return this.httpClient.get<ListResponseModel<RentalDetail>>(path);
  }

  add(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "add", rental);
  }

  update(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "update", rental);
  }

  delete(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "delete", rental);
  }

  getRentalImage(rentalDetail: RentalDetail): string {
    if (rentalDetail.imagePath.length === 0) {
      const path = this.imageUrl + "/Images/default.png";
      return path;
    }
    else {
      const path = this.imageUrl + rentalDetail.imagePath[0];
      return path;
    }
  }


}
