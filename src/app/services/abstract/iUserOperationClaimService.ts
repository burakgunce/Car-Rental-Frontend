import { Observable } from "rxjs";
import { UserOperationClaimDetail } from "../../models/details/userOperationClaimDetail";
import { UserOperationClaim } from "../../models/entities/userOperationClaim";
import { ListResponseModel } from "../../models/listResponseModel";
import { ResponseModel } from "../../models/responseModel";
import { SingleResponseModel } from "../../models/singleResponseModel";

export interface IUserOperationClaimService {
    getAll(): Observable<ListResponseModel<UserOperationClaim>>;
    getById(id: number): Observable<SingleResponseModel<UserOperationClaim>>;
    add(userOperationClaim: UserOperationClaim): Observable<ResponseModel>;
    update(userOperationClaim: UserOperationClaim): Observable<ResponseModel>;
    delete(userOperationClaim: UserOperationClaim): Observable<ResponseModel>;
    getAllUserOperationClaimDetails(): Observable<ListResponseModel<UserOperationClaimDetail>>;
    getUserOperationClaimDetailsById(id: number): Observable<SingleResponseModel<UserOperationClaimDetail>>;
  }