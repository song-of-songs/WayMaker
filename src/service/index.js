//引入封装好的 service
import service from "./service";
 
//声明一个基础接口变量
let baseURL;
 
//配置开发环境
if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://test.songofsongs.life';
}
 
// 配置生产环境
if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://test.songofsongs.life';
}
 
//设置请求头（如果请求头统一的话可以在axios文件设置，则无须从这里传过去）
const header = {
  Accept: 'application/json;charset=UTF-8;multipart/form-data',
  'Content-Type': 'application/x-www-form-urlencoded;application/octet-stream'
}
 
//根据自身需求
let wayMakerService={
    getList(data) {
        const url = baseURL;
        return service.get(url, data, header);
    },
    uploadOneFile(data) {
      // const url = " http://localhost:8082";
      const url = " http://192.168.1.10:8082";
      return service.post(url, data, header);
    },
    upload(path,data,header) {
      const url = " http://localhost:8082";
      // const url = " http://192.168.1.10:8082";
      return service.post(url+path, data, header);
    }
}
 
 
//导出
export default wayMakerService