import Request from '../../services/APIService';
import { BASE_URL_API } from '../../constants';

export const sendGetProfile = () =>
  Request.get({
    url: `${BASE_URL_API}/profile`,
  });
