import request from "@/utils/request";
// import config from "../../config/config";
export function login(data) {
  return request({
    url: "/vue/user/login",
    method: "post",
    data,
  });
}
export function UserMenu(data) {
  return request({
    url: "/vue/user/list",
    method: "get",
    data,
  });
}
