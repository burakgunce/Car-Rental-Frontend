import { Observable } from "rxjs";
import { UserForInfoDetail } from "../../models/details/userForInfoDetail";
import { ListResponseModel } from "../../models/listResponseModel";
import { SingleResponseModel } from "../../models/singleResponseModel";

export interface IUserService {
    getAll(): Observable<ListResponseModel<UserForInfoDetail>>;
    getById(id: number): Observable<SingleResponseModel<UserForInfoDetail>>;
  }