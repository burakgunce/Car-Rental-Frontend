import { Observable } from "rxjs";
import { RentalDetail } from "../../models/details/rentalDetail";
import { Rental } from "../../models/entities/rental";
import { ListResponseModel } from "../../models/listResponseModel";
import { ResponseModel } from "../../models/responseModel";
import { SingleResponseModel } from "../../models/singleResponseModel";

export interface IRentalService {
    getAll(): Observable<ListResponseModel<Rental>>;
    getById(id: number): Observable<SingleResponseModel<Rental>>;
    getAllRentalDetails(): Observable<ListResponseModel<RentalDetail>>;
    getRentalDetailsById(id: number): Observable<SingleResponseModel<RentalDetail>>;
    isCarAvailable(carId: number): Observable<SingleResponseModel<boolean>>;
    add(rental: Rental): Observable<ResponseModel>;
    update(rental: Rental): Observable<ResponseModel>;
    delete(rental: Rental): Observable<ResponseModel>;
    getAllRentalLength(): Observable<SingleResponseModel<number>>;
  }