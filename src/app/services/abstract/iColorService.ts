import { Observable } from "rxjs";
import { ListResponseModel } from "../../models/listResponseModel";
import { SingleResponseModel } from "../../models/singleResponseModel";
import { Color } from "../../models/entities/color";
import { ResponseModel } from "../../models/responseModel";

export interface IColorService {
    getAll(): Observable<ListResponseModel<Color>>;
    getById(id: number): Observable<SingleResponseModel<Color>>;
    add(color: Color): Observable<ResponseModel>;
    update(color: Color): Observable<ResponseModel>;
    delete(color: Color): Observable<ResponseModel>;
    getAllColorLength(): Observable<SingleResponseModel<number>>;
  }