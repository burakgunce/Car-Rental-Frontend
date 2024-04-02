import { Observable } from "rxjs";
import { ListResponseModel } from "../../models/listResponseModel";
import { CarImage } from "../../models/entities/carImage";
import { SingleResponseModel } from "../../models/singleResponseModel";
import { ResponseModel } from "../../models/responseModel";
import { CarImageDetail } from "../../models/details/carImageDetail";


export interface ICarImageService {
  getAll(): Observable<ListResponseModel<CarImage>>;
  getById(id: number): Observable<SingleResponseModel<CarImage>>;
  add(carImage: CarImage): Observable<ResponseModel>;
  delete(carImage: CarImage): Observable<ResponseModel>;
  update(carImage: CarImage): Observable<ResponseModel>;
  getCarImageDetailsById(id: number): Observable<SingleResponseModel<CarImageDetail>>;
  getAllCarImageDetails(): Observable<ListResponseModel<CarImageDetail>>;
}