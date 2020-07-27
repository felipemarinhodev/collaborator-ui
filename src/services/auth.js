import axios from 'axios';
import history from './history';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

api.interceptors.request.use(async (request) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
},
(error) => (
  Promise.reject(error)
));

api.interceptors.response.use(
  (response) => {
    const { errors } = response.data;
    if (!!errors && !!(errors.find((error) => error.message === 'Not authorized'))) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      history.go('/');
      return Promise.reject(Error());
    }
    return response;
  },
  (error) => (
    Promise.reject(error)
  ),
);


export default api;
