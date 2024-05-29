import config from "../../utils/conf/config.js";
import {request} from "../../utils/request/request.js";


//显示所有新闻
export function GetAllNews(data){
    return request(config.baseApi+"/GetAllNews","get",data)
}

//显示所有新闻
export function GetAllSwipers(data){
    return request(config.baseApi+"/GetAllSwipers","get",data)
}

export function GetDoctors(data){
    return request(config.baseApi+"/doctors","get",data)
}





// 查找单个swiper的内容
// export function GetSwiperbyID(data){
//     return request(config.baseApi+"/GetSwiperbyID","get",data)
// }