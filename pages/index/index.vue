<template>
	<view>
		<view class="content">
			<!-- 轮播图 -->
			<view class="swiper-container">
				<swiper :indicator-dots="true" :autoplay="true" indicator-active-color="#fff" :interval="3000"
					:duration="500" :circular="true" class="swiper">
					<swiper-item v-for="(item, index) in swiperList" :key="item.id" @click="goSwiperDetail(item)">
						<image :src="item.image_url" class="swiper-image" mode="aspectFill"></image>
						<!-- 图片文字说明 -->
						<view class="swiper-text news-content">{{ item.title }}</view>
					</swiper-item>
				</swiper>
			</view>

		</view>
		<!-- 宫格图标 -->
		<view>
			<u-grid :border="false" col="3">
				<u-grid-item v-for="(listItem,listIndex) in Gridlist" :key="listIndex" @click="gofunctions(listItem)">
					<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="listItem.name" :size="24"
						color="#606266"></u-icon>
					<text class="grid-text">{{listItem.title}}</text>
				</u-grid-item>
			</u-grid>
		</view>
		<!-- 恢复盒子 -->
		<view>
			<view class="recovery_box">
				<view class="recovery">
					<view style="background-color:#3c9cff;width: 10px;height: 30px; border-radius: 10px;">

					</view>
					<view class="tuijian" @click="tofind">
						<text style="font-size: 16px; font-weight: bold;">推荐:</text>
					</view>
				</view>
				<view class="more" @click="sectionclick">
					<text>查看更多</text><u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<!-- 推荐列表 -->
			<view>
				<view class="recovery_list" v-for="(item,index) in recovery_list" :key="index" @click="goDetail(item)">
					<view class="imgview">
						<image :src="item.doctor_imgurl" mode="scaleToFill"></image>
					</view>
					<view class="textview">
						<p style="font-weight: bold;">{{item.doctor_name}}</p>
						<p class="news-content">{{item.doctor_specialty}}</p>
					</view>
				</view>
			</view>
		</view>
		<!-- tabbar -->
		<!-- <tab-bar></tab-bar> -->
	</view>
</template>

<script>
	import {
		GetAllNews,
		GetAllSwipers,
		GetDoctors
	} from '@/api/business/index.js';
	export default {
		name: "view-index",
		data() {
			return {
				recovery_list: [],
				swiperList: [],
				Gridlist: [{
						name: 'file-text',
						title: '信息填写'
					},
					{
						name: 'heart',
						title: '新闻列表'
					},
					{
						name: 'camera',
						title: 'X'
					},
				],
			}
		},
		// onShow() {
		// 	this.$store.commit("changeTabbarIndex", 0)
		// },
		onLoad() {
			this.getData();
		},
		methods: {
			tofind() {
				uni.navigateTo({
					url: "/pages/find/index"
				})
			},
			sectionclick() {
				uni.navigateTo({
					url: "/pages/doctor/index"
				})
			},

			// Gridlist的项目列表
			gofunctions(e) {
				if (e.name == "file-text") {
					uni.navigateTo({
						url: '/pages-basic/messagewriten/messagewriten'
					})
					// console.log(1)
				}
				if (e.name == 'heart') {
					console.log('没有，点什么点。')
					// uni.switchTab({
					// 	url: '/pages/doctor/index'
					// })
				}
			},

			goDetail(e) {
				let detail = e;
				uni.navigateTo({
					url: "/pages-basic/details/details?detailDate=" + encodeURIComponent(JSON.stringify(detail))
				});
			},
			goSwiperDetail(e) {
				let detail = e;
				uni.navigateTo({
					url: "/pages-basic/details/details?detailDate=" + encodeURIComponent(JSON.stringify(detail))
				});
			},

			getData() {

				GetDoctors().then((res) => {
					console.log(res)
					this.recovery_list = res;
					// console.log(this.recovery_list);
				});
				// GetAllNews().then((res) => {
				// 	this.recovery_list = res;
				// 	// console.log(this.recovery_list);
				// });
				GetAllSwipers().then((res) => {
					this.swiperList = res;
					// console.log(this.swiperList);
				});
			},
		},
		//分享小程序
		onShareAppMessage(res) {
			return {
				title: '点餐小程序',
				path: '/pages/index/'
			}
		},
		//下拉刷新
		onPullDownRefresh() {
			this.recovery_list = this.recovery_list.slice(0, 3);
			uni.stopPullDownRefresh(); //停下
		},
		//上拉加载数据
		onReachBottom() {
			let newData = this.recovery_list;
			setTimeout(() => {
				this.recovery_list = this.recovery_list.concat(newData);
			}, 1000);
		},
	}
</script>

<style>
	.search-box {
		margin-top: 2px;
		/* border: 1px solid; */
		width: 100%;
		height: 46px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.swiper-container {
		width: 90%;
		height: 220px;
		border-radius: 10px;
		overflow: hidden;
		margin: 10px;
		margin-top: 4px;
	}

	.swiper {
		width: 100%;
		height: 100%;
	}

	.swiper-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 10px;
		/* 添加圆角 */
	}

	.swiper-text {
		position: absolute;
		bottom: 10px;
		left: 10px;
		color: #fff;
		font-size: 16px;
		background-color: rgba(0, 0, 0, 0.5);
		padding: 5px 10px;
		border-radius: 5px;
	}

	.grid-text {
		font-size: 14px;
		color: #3c9cff;
		padding: 10rpx 0 20rpx 0rpx;
		/* #ifndef APP-PLUS */
		box-sizing: border-box;
		/* #endif */
	}

	.recovery_box {
		margin-top: 4px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		background-color: #ffffff;
		/* border: 1px solid #e0e0e0; */
		border-radius: 14px;
		box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05);
		/* 添加阴影效果 */
	}

	.recovery {
		display: flex;
		align-items: center;
		cursor: pointer;
	}

	.recovery>.tuijian {
		margin-left: 10px;
	}

	.recovery>.tuijian>text {
		font-size: 16px;
		font-weight: bold;
	}

	.more {
		display: flex;
		align-items: center;
		color: #3c9cff;
		/* 推荐链接文字颜色 */
		cursor: pointer;
		text-decoration: none;
		/* 去除链接的下划线 */

		/* 美化样式 */
		padding: 2px;
		/* border: 1px solid #3c9cff; */
		border-radius: 5px;
	}

	/* 推荐列表样式*/
	.recovery_list {
		margin-top: 10px;
		display: flex;
		align-items: center;
		padding: 10px;
		border: 1px solid #eee;
		border-radius: 5px;
		cursor: pointer;
	}

	.imgview {
		margin-left: 10px;

	}

	.imgview image {
		width: 120px;
		height: 80px;
		object-fit: cover;
		border-radius: 5px;
		box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
	}

	.textview {
		margin-left: 10px;
		flex: 1;
	}

	.textview p {
		margin: 0;
		font-size: 16px;
		line-height: 1.5;
		color: #333333;
	}

	.news-content {
		/*文字自动变省略号步骤1 :宽度*/
		width: 34vw;
		/*文字自动变省略号步骤2 :不允许文字(在空白处)折行*/
		white-space: nowrap;
		/*wrap :换行*/
		/*文字自动变省略号步骤3 :溢出的文本- -律隐藏 */
		overflow: hidden;
		/*文字自动变省略号步骤4 :如果发生文本溢出,则使用省略号代替*/
		text-overflow: ellipsis;

	}
</style>