import { request } from "./request";

export function getHomeMultidata() {
  return request("home/multidata");
}
