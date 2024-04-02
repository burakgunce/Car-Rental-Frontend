import { Observable } from "rxjs";
import { SingleResponseModel } from "../../models/singleResponseModel";
import { Brand } from "../../models/entities/brand";
import { ListResponseModel } from "../../models/listResponseModel";
import { ResponseModel } from "../../models/responseModel";

export interface IBrandService {

    getById(id: number): Observable<SingleResponseModel<Brand>>;
    getAll(): Observable<ListResponseModel<Brand>>;
    getAllBrandLength(): Observable<SingleResponseModel<number>>;
    add(brand: Brand): Observable<ResponseModel>;
    update(brand: Brand): Observable<ResponseModel>;
    delete(brand: Brand): Observable<ResponseModel>;
  }