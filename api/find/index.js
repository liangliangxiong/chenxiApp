import config from "../../utils/conf/config.js";
import {request} from "../../utils/request/request.js";


//获取药品类别
export function news_categories(data){
    return request(config.baseApi+"/news_categories","get",data);
}

//获取对应类别药品
export function getMedicineBycategories(data){
    return request(config.baseApi+"/getMedicineBycategories","get",data);
}

//根据分类id找到类别名称
export function getNewsBycategories(data){
    return request(config.baseApi+"/getNewsBycategories","get",data);
}
// 所有药品
export function GetAllNews(data){
    return request(config.baseApi+"/GetAllNews","get",data);
}
