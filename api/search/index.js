import config from "../../utils/conf/config.js";
import {request} from "../../utils/request/request.js";

// 模糊查询
export function mhsearch(data){
    return request(config.baseApi+"/mhsearch","get",data);
}