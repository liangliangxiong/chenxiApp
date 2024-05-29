<template>
	<view>
		<u-tabbar :value="selectedIndex" @change="tabbarChange" :fixed="true" :placeholder="false" activeColor="#3c9cff"
			:safeAreaInsetBottom="true">
			<u-tabbar-item v-for="(item,index) in list" :text="item.text" :icon="item.icon"
				:key="item.index"></u-tabbar-item>

		</u-tabbar>
	</view>
</template>


<script>
	export default {
		name: "tabbar",
		data() {
			return {
				list: [{
						"text": "首页",
						"icon": "home",
						"pagePath": "/pages/index/index"
					},
					// {
					// 	"text": "医生列表",
					// 	"icon": "heart",
					// 	"pagePath": "/pages/doctor/index"
					// },
					{
						"text": "发现",
						"icon": "eye",
						"pagePath": "/pages/find/index"
					},
					{
						"text": "我的",
						"icon": "account",
						"pagePath": "/pages/my/index"
					}
				]
			};
		},
		computed: {
			selectedIndex() {
				// console.log(this.$store.state.tabbar.tabbarIndex); // 输出状态值以便调试
				return this.$store.state.tabbar.tabbarIndex;
			}
		},
		methods: {
			tabbarChange(index) {
				// console.log(this.list[index].pagePath); // 输出选中的页面路径以便调试
				this.$store.commit('tabbar/changeTabbarIndex', index);
				uni.switchTab({
					url: this.list[index].pagePath
				})
			}
		},

	}
</script>

<style lang="scss">

</style>