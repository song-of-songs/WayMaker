//引入封装好的 axios
import Axios from './axios'
 
//实例化
const axios = Axios()
console.log("11111")
//创建需要的请求方法:get post put delete
//url:请求的接口地址
//params:请求参数
//headers:请求头
export default {
  get(url, params, headers) {
    return axios.get(url, {params, headers})
  },
  post(url, params, headers) {
    return axios.post(url, params, {headers})
  },
  put(url, params, headers) {
    return axios.put(url, params, {headers})
  },
  delete(url, params, headers) {
    return axios.delete(url, {params, headers})
  }
}