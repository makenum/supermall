import axios from "axios";
export function request(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000/api/v1/",
    timeout: 5000
  });
  // 请求拦截的作用
  axios.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  // 响应拦截
  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );
  // 发送真正的网络请求
  return instance(config);
}
