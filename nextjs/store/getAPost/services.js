import Request from '../../services/APIService';
import { BASE_URL_API } from '../../constants';

export const sendGetAPostRequest = postId =>
  Request.get({
    url: `${BASE_URL_API}/posts/${postId}`,
  });
