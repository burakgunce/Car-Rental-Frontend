import { Observable } from "rxjs";
import { ListResponseModel } from "../../models/listResponseModel";
import { ModelColor } from "../../models/entities/modelColor";
import { SingleResponseModel } from "../../models/singleResponseModel";
import { ResponseModel } from "../../models/responseModel";
import { ModelColorDetail } from "../../models/details/modelColorDetail";

export interface IModelColorService {
    getAll(): Observable<ListResponseModel<ModelColor>>;
    getById(id: number): Observable<SingleResponseModel<ModelColor>>;
    add(modelColor: ModelColor): Observable<ResponseModel>;
    update(modelColor: ModelColor): Observable<ResponseModel>;
    delete(modelColor: ModelColor): Observable<ResponseModel>;
    getModelColorDetailsById(id: number): Observable<SingleResponseModel<ModelColorDetail>>;
    getAllModelColorDetails(): Observable<ListResponseModel<ModelColorDetail>>;
  }