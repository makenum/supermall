import axios from "axios";
export function request(config) {
  const instance = axios.create({
    // baseURL: "http://106.54.54.237:8000/api/v1",
    baseURL: "http://123.207.32.32:8000/api/vip",
    timeout: 5000
  });
  // 请求拦截的作用
  instance.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      // return Promise.reject(error);
      console.log(error);
    }
  );
  // 响应拦截
  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {
      // return Promise.reject(error);
      console.log(err);
    }
  );
  // 发送真正的网络请求
  return instance(config);
}
