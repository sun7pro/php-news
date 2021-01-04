import Request from '../../services/APIService';
import { BASE_URL_API } from '../../constants';

export const sendAddPostRequest = post =>
  Request.post({
    url: `${BASE_URL_API}/posts`,
    data: post,
  });
