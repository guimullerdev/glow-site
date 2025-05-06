import axios from 'axios';

const baseURL =
  process.env.NEXT_PUBLIC_API_URL ||
  'https://signalpdvimages.s3.us-east-2.amazonaws.com';

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  },
);

api.interceptors.request.use(
  (response) => response,
  (config) => {
    //   console.log({ config})
    return config;
  },
);
