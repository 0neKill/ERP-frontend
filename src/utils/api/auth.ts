import axios from "../../core/axios";
import {AuthValues} from "../../types/layouts/auth/general";
import {IFormValuesSingIn} from "../../types/layouts/auth/sing_in";

export const authorization = (data: IFormValuesSingIn) => axios.post('/api/authenticate', data);
export const registration = (data: AuthValues) => axios.post('/api/register', data);
export const request_confirm = (hash: string) => axios.get(`/api/verify?hash=${hash}`);