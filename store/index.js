import Vue from "vue";
import Vuex from "vuex";
import system from "./system";
import business from "./business";
import tabbar from "./tabbar";

Vue.use(Vuex);

const store=new Vuex.Store({
    modules:{
        system,
        business,
		tabbar
    }
});

export default store;
