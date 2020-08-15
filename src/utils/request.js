import axios from "axios";
function getUserInfo(){
  return JSON.parse(window.sessionStorage.getItem("userInfo"))?JSON.parse(window.sessionStorage.getItem("userInfo")).username:"";
}
axios.defaults.headers.common["iv-user"]=getUserInfo()
// create an axios instance
const service = axios.create({
 
  // baseURL: "https://www.easy-mock.com/mock/5e8abc73de14c07ce4b4f258/baseVue", // url = base url + request url//easymock
  baseURL:config.SERVE_URL,//mock
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 500000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;
    console.log(response);
    // if the custom code is not 20000, it is judged as an error.
    if (res.code == 200) {
      return res;
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   // to re-login
      //   MessageBox.confirm(
      //     "You have been logged out, you can cancel to stay on this page, or log in again",
      //     "Confirm logout",
      //     {
      //       confirmButtonText: "Re-Login",
      //       cancelButtonText: "Cancel",
      //       type: "warning"
      //     }
      //   ).then(() => {
      //     store.dispatch("user/resetToken").then(() => {
      //       location.reload();
      //     });
      //   });
      // }
      // return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
