import Request from '../../services/APIService';
import { BASE_URL_API } from '../../constants';

export const sendGetPostsRequest = filter =>
  Request.get({
    url: `${BASE_URL_API}/posts`,
    params: filter,
  });
