import { LoginModel } from '../../models/details/loginModel';
import { TokenModel } from '../../models/details/tokenModel';
import { SingleResponseModel } from '../../models/singleResponseModel';
import { RegisterModel } from './../../models/details/registerModel';
import { Observable } from "rxjs";


export interface IAuthService {
  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>>;
  register(registerModel: RegisterModel): Observable<SingleResponseModel<TokenModel>>
}