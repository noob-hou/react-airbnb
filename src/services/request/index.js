import { TIMEOUT,BASE_URL } from "./config";
import axios from "axios";
class Request {
  constructor(baseURL,timeout){
    this.instance = axios.create({
        baseURL,
        timeout
    })
    this.instance.interceptors.response.use(res=>{
        return res.data
    })
  }
  request(config){
    return this.instance.request(config)
  }
  get(config){
    return this.request({...config,methods:'get'})
  }
  post(config){
    return this.request({...config,methods:'post'})
  }
}

export default new Request(BASE_URL,TIMEOUT)