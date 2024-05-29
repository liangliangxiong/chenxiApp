<template>
	<view class="set-page">
		<view class="cell-group">
			<u-cell-group>
				<u-cell icon="edit-pen-fill" title="编辑资料" isLink></u-cell>
				<u-cell icon="setting-fill" title="账号设置" isLink></u-cell>
				<u-cell :border="false" icon="info-circle-fill" title="检查更新" isLink></u-cell>
			</u-cell-group>
		</view>
		<view v-if="mobile" class="logout" style="color: red;" @click="logout">
			<text>退出登录</text>
		</view>
		<view v-else class="logout" style="color: black;" @click="gologin">
			<text>登录</text>
		</view>
		<view class="v">
			v1.0.0
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginInfo:false,
				mobile:''
			};
		},
		onShow() {
			this.mobile=uni.getStorageSync('mobile') || ''
			console.log(this.mobile)

		},
		methods: {
			logout() {
				uni.showModal({
					content: '确定退出当前账户吗?',
					success: (res) => {
						if (res.confirm) {
							uni.showToast({
								title: "退出成功"
							})
							setTimeout(() => {
								uni.removeStorageSync("mobile")
								uni.reLaunch({
									url: "/pages/my/index"
								})
							}, 500)
						}
					}
				})
			},
			gologin(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.set-page {
		background-color: #f5f5f5;
		height: 100vh;

		.cell-group {
			background-color: #fff;
		}

		.logout {
			margin: 20rpx 0;
			border: none;
			background-color: #fff;
			color: red;
			height: 80rpx;
			width: 100%;
			line-height: 80rpx;
			text-align: center;
			font-size: 32rpx;
		}

		.v {
			line-height: 100rpx;
			text-align: center;
			height: 100rpx;
			width: 100%;
			font-size: 30rpx;
			color: gray;
		}
	}
</style>