import axios, {AxiosInstance} from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/cavid-aliyev/tex-task',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
