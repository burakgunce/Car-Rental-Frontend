import { Observable } from "rxjs";
import { ListResponseModel } from "../../models/listResponseModel";
import { Model } from "../../models/entities/model";
import { SingleResponseModel } from "../../models/singleResponseModel";
import { ModelDetail } from "../../models/details/modelDetail";
import { ResponseModel } from "../../models/responseModel";

export interface IModelService {
    getAll(): Observable<ListResponseModel<Model>>;
    getById(id: number): Observable<SingleResponseModel<Model>>;
    getAllModelDetails(): Observable<ListResponseModel<ModelDetail>>;
    getModelDetailsById(id: number): Observable<SingleResponseModel<ModelDetail>>;
    add(model: Model): Observable<ResponseModel>;
    update(model: Model): Observable<ResponseModel>;
    delete(model: Model): Observable<ResponseModel>;
    getAllModelLength(): Observable<SingleResponseModel<number>>;
  }