import Request from '../../services/APIService';
import { BASE_URL_API } from '../../constants';

export const sendVotesRequest = information =>
  Request.post({
    url: `${BASE_URL_API}/votes`,
    data: information,
  });
