import Request from '../../services/APIService';

export const sendAddPostRequest = post =>
  Request.post({
    url: `${process.env.BASE_URL_API}/posts`,
    data: post,
  });
