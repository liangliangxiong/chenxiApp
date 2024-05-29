<template>
	<view class="grid-box">
		<u-grid :border="false" @click="click" col="4">
			<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
				<text class="grid-title">{{baseListItem.value?baseListItem.value:'-'}}</text>
				<text class="grid-text">{{baseListItem.title}}</text>
			</u-grid-item>
		</u-grid>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseList: [{
						value: 0,
						title: '点赞'
					},
					{
						value: 0,
						title: '收藏'
					},
					{
						value: 0,
						title: '关注'
					}, {
						value: 0,
						title: '我的'
					}
				]
			}
		},
		methods: {
			click(name) {
				this.$refs.uToast.success(`点击了第${name}个`)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.grid-box {
		margin-top: 20rpx;

		.grid-title {
			font-size: 32rpx;
			color: #fff;
			font-weight: bold;
		}

		.grid-text {
			font-size: 28rpx;
			color: #fff;
			padding: 10rpx 0 20rpx 0rpx;
			box-sizing: border-box;
		}
	}
</style>