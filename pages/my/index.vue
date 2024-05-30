<template>
	<view class="mine-page">
		<view class="header">
			<UserInfo></UserInfo>
			<!-- <Grid></Grid> -->
		</view>
		<u-cell-group>
			<u-cell icon="question-circle-fill" title="帮助中心" isLink></u-cell>
			<u-cell icon="email-fill" title="意见反馈" isLink></u-cell>
			<u-cell icon="info-circle-fill" title="关于我们" isLink></u-cell>
			<u-cell icon="setting-fill" title="设置" isLink url="/pages-mine/set/set"></u-cell>
		</u-cell-group>
		<!-- <tab-bar></tab-bar> -->
	</view>
</template>

<script>
	import UserInfo from "./components/UserInfo.vue"
	import Grid from "./components/Grid.vue"
	export default {
		components: {
			UserInfo,
			Grid
		},
		data() {
			return {

			};
		},
		// onShow() {
		// 	this.$store.commit("changeTabbarIndex", 3)
		// },
		methods:{

		}
	}
</script>

<style scoped lang="scss">
	.mine-page {
		.header {
			height: 320rpx;
			background: $u-primary;
		}
	}
</style>