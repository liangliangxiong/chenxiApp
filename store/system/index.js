export default {
    namespaced:true,
    state:{
        isIpx:false, //是否iPhoneX
    },
    mutations:{
        //设置isIpx
        ["SET_IPX"](state,payload){
            state.isIpx=payload.isIpx;
        }
    }
}
