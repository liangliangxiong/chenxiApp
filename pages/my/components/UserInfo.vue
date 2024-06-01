<template>
	<view class="user-info-page">
		<view v-if="!userInfo">
			<view class="userinfo" @click="toLogin">
				<view class="box">
					<u-avatar size="60"></u-avatar>
					<view class="name">
						登录/注册
					</view>
				</view>
			</view>
		</view>
		<view v-else>
			<view class="userinfo" @click="toUserInfo">
				<view class="box">
					<u-avatar v-if="!userInfo" size="60" src="/static/logo.png"></u-avatar>
					<u-avatar v-else size="60" src="/static/01.gif"></u-avatar>
					<view class="name">
						用户：{{userInfo}}
					</view>
				</view>
				<u-icon name="arrow-right" color="#fff" size="18"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		computed: {
			userInfo() {
				return uni.getStorageSync('mobile') || ''
			}
		},
		methods: {
			toLogin() {
				uni.navigateTo({
					url: "/pages-mine/login/login"
				})
			},
			toUserInfo() {
				uni.navigateTo({
					url: "/pages-mine/personal-center/personal-center"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-info-page {
		padding: 40rpx;
		box-sizing: border-box;

		.userinfo {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.box {
				display: flex;
				align-items: center;

				.name {
					margin-left: 20rpx;
					font-size: 32rpx;
					font-weight: bold;
					color: #fff;
				}
			}

		}
	}
</style>