import {IFormValuesSingIn, IFormValuesValidateSingIn} from "./sing_in";
import {IFormValuesSingUp, IFormValuesValidateSingUp} from "./sing_up";


export type AuthValues = IFormValuesSingIn & IFormValuesSingUp;
export type AuthFunctionsValues = IFormValuesValidateSingIn & IFormValuesValidateSingUp;
export type AuthFieldValue = 'email' | 'password' | 'user_name' | 'repeat_password';
