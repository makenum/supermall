import { request } from "./request";

export function getHomeMultidata() {
  return request("home/multidata");
}
export function getHomePopularData() {
  return request("home/data?type=sell&page=1");
}
