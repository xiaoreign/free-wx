import global from "./global";
import Fly from "flyio/dist/npm/wx";
var hostUrl = "https://charger.j1st.io:8443";
// var hostUrl = "http://192.168.117.243:8080";
// var hostUrl = "http://192.168.117.137:8080";

const request = new Fly()

request.interceptors.request.use((request) => {
    //给所有请求添加自定义header
    request.headers["Authorization"] = "Bearer " + global.state.token
    request.baseURL = hostUrl
    return request;
})

export default request