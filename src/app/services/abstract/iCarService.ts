import { Observable } from "rxjs";
import { ListResponseModel } from "../../models/listResponseModel";
import { Car } from "../../models/entities/car";
import { ResponseModel } from "../../models/responseModel";
import { SingleResponseModel } from "../../models/singleResponseModel";
import { CarDetail } from "../../models/details/carDetail";

export interface ICarService {
    getAll(): Observable<ListResponseModel<Car>>;
    add(car: Car): Observable<ResponseModel>;
    update(car: Car): Observable<ResponseModel>;
    delete(car: Car): Observable<ResponseModel>;
    getById(id: number): Observable<SingleResponseModel<Car>>;
    getCarsByModelId(modelId: number): Observable<ListResponseModel<Car>>;
    getCarsByColorId(colorId: number): Observable<ListResponseModel<Car>>;
    getAllCarDetails(): Observable<ListResponseModel<CarDetail>>;
    getCarDetailsById(id: number): Observable<SingleResponseModel<CarDetail>>;
    getAllCarDetailsByBrandId(brandId: number): Observable<ListResponseModel<CarDetail>>;
    getAllCarDetailsByColorId(colorId: number): Observable<ListResponseModel<CarDetail>>;
    getAllCarDetailsByBrandIdColorIdMinDailyPriceMaxDailyPrice(brandId: number, colorId: number, minDailyPrice: number, maxDailyPrice: number): Observable<ListResponseModel<CarDetail>>;
  }