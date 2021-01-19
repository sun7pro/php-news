import Request from '../../services/APIService';
import { BASE_URL_API } from '../../constants';

export const sendAddCommentRequest = comment =>
  Request.post({
    url: `${BASE_URL_API}/comments`,
    data: comment,
  });
