// tabbar.js
export default {
	namespaced: true,
	state: {
		tabbarIndex:0,
	},
	mutations: {
		changeTabbarIndex(state, index) {
			state.tabbarIndex = index;
		}
	}
}