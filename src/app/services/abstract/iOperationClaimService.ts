import { Observable } from "rxjs";
import { ListResponseModel } from "../../models/listResponseModel";
import { OperationClaim } from "../../models/entities/operationClaim";
import { ResponseModel } from "../../models/responseModel";
import { SingleResponseModel } from "../../models/singleResponseModel";

export interface IOperationClaimService {
    getAll(): Observable<ListResponseModel<OperationClaim>>;
    getById(id: number): Observable<SingleResponseModel<OperationClaim>>;
    add(operationClaim: OperationClaim): Observable<ResponseModel>;
    update(operationClaim: OperationClaim): Observable<ResponseModel>;
    delete(operationClaim: OperationClaim): Observable<ResponseModel>;
  }