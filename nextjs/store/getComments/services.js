import Request from '../../services/APIService';
import { BASE_URL_API } from '../../constants';

export const sendGetCommentsRequest = postId =>
  Request.get({
    url: `${BASE_URL_API}/comments`,
    params: { postId },
  });
