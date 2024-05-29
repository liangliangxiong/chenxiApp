<template>
	<view>
		<view class="banner">
			<view class="banner-title">{{ banner.doctor_title }}</view>
			<image class="banner-image" :src="banner.doctor_imgurl"></image>
		</view>
		<view>
			<text class="banner-content">{{ banner.doctor_specialty }}</text>
		</view>
<!-- 		<view class="extra-info">
			<view class="extra-info">
				<view class="publish-time-container">
					<text class="publish-time">发布时间：{{ formatDate(banner.publish_time) }}</text>
					<u-icon name="calendar" size="16" color="#999"></u-icon>
				</view>
				<view class="category-container">
					<text class="category">分类：{{ banner.category }}</text>
					<u-icon name="folder" size="16" color="#999"></u-icon>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				banner: [],
			};
		},
		methods: {
			formatDate(dateString) {
				const date = new Date(dateString);
				return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
			},
		},
		onLoad(event) {
			this.banner = JSON.parse(decodeURIComponent(event.detailDate));
			console.log(this.banner)
			// 设置页面标题
			uni.setNavigationBarTitle({
				title: this.banner.doctor_name
			});
		},
	}
</script>

<style lang="scss">
	.banner {
		margin-bottom: 20px;
		padding: 10px;
		background-color: #fff;
		border: 1px solid #ddd;
		border-radius: 5px;
	}

	.banner-image {
		width: 100%;
		height: 200px;
		object-fit: cover;
		border-radius: 5px;
		box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
	}

	.banner-title {
		font-size: 18px;
		font-weight: bold;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.banner-content {
		font-size: 16px;
		line-height: 1.5;
		padding: 10px;
		text-indent: 2em;
		padding-bottom: 60px;
	}

	.extra-info {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 10px;
		background-color: #f2f2f2;
		border-top: 1px solid #ddd;
		display: flex;
		align-items: center;
		justify-content: space-between;
		
	}

	.publish-time-container,
	.category-container {
		display: flex;
		align-items: center;
	}

	.publish-time,
	.category {
		font-size: 14px;
		color: #666;
		margin-right: 5px;
	}

	u-icon {
		margin-left: 5px;
	}
</style>