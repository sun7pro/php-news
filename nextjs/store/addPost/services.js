import Request from '../../services/APIService';

export const sendAddPostRequest = post =>
  Request.post({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/posts`,
    data: post,
  });