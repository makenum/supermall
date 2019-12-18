import axios from "axios";
const URL =
  "http://106.54.54.237:8000/api/v1" || "http://123.207.32.32:8000/api/vip";
export function request(config) {
  const instance = axios.create({
    baseURL: URL,
    timeout: 5000
  });
  // 请求拦截的作用
  instance.interceptors.request.use(
    req => {
      return req;
    },
    error => {
      return Promise.reject(error);
    }
  );
  // 响应拦截
  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    error => {
      return Promise.reject(error);
    }
  );
  // 发送真正的网络请求
  return instance(config);
}
