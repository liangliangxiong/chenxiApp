<template>
	<view class="container">
		<view class="header">
			<view class="header-left">
				<view class="title">课程</view>
				<view class="subtitle">无论你是想上手使用新 Apple 产品，还是要进一步提升技能，都可以找到适合你的课程。</view>
				<u-link href="https://www.apple.com.cn/wuhan/" text="晨曦" class="link"></u-link>
			</view>
			<view class="header-right">
				<image src="../../static/01.gif" class="avatar"></image>
			</view>
		</view>
		<view class="content">
			<image src="../../static/01.gif" class="content-image"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
	};
</script>

<style scoped>
	.container {
		padding: 40rpx;
		/* 调整整体页面的内边距 */
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		/* 调整对齐方式 */
		margin-bottom: 40rpx;
		/* 增加底部间距 */
	}

	.header-left {
		flex: 1;
	}

	.title {
		font-size: 44rpx;
		/* 调整标题大小 */
		font-weight: bold;
		margin-bottom: 20rpx;
		/* 增加标题与描述之间的间距 */
	}

	.subtitle {
		font-size: 32rpx;
		/* 调整描述文字大小 */
		color: #666;
		margin-bottom: 20rpx;
		/* 增加描述文字与链接之间的间距 */
	}

	.link {
		font-size: 32rpx;
		/* 调整链接文字大小 */
		color: #007aff;
	}

	.header-right {
		width: 100rpx;
		/* 调整头像容器大小 */
		height: 100rpx;
		margin-left: 20rpx;
		/* 增加左边距 */
	}

	.avatar {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.content {
		margin-top: 40rpx;
		/* 增加内容部分的上边距 */
	}

	.content-image {
		width: 100%;
		border-radius: 20rpx;
	}
</style>