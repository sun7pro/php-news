import Request from '../../services/APIService';
import { BASE_URL_API } from '../../constants';

export const sendRegisterRequest = information =>
  Request.post({
    url: `${BASE_URL_API}/register`,
    data: information,
  });
