<template>
	<view class="container">
		<!-- 搜索框 -->
		<view class="search-box">
			<u-search placeholder="输入新闻名字" :showAction="true" :focus="true" input-align="center" :animation="true"
				:clearabled="true" shape="round" v-model="keyword.keyword" @custom='searchClick'
				@search='searchClick'></u-search>
		</view>

		<u-tabs :list="categories" @click="click" :current="current" lineWidth="30" bar-width="50" lineColor="#3c9cff"
			:activeStyle="{
            color: '#303133',
            fontWeight: 'bold',
            transform: 'scale(1.05)'
        }" :inactiveStyle="{
            color: '#606266',	
            transform: 'scale(1)'
        }" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;" @change="change"></u-tabs>

		<view>
			<view class="recovery_list" v-for="(item,index) in Lists" :key="index" @click="goDetail(item)">
				<view class="imgview">
					<image :src="item.news_tp" mode="scaleToFill"></image>
				</view>
				<view class="textview">
					<p style="font-weight: bold;">{{item.news_bt}}</p>
					<p class="news-content">{{item.ctime.substring(0,10)}}</p>
				</view>
			</view>
		</view>

		<!-- 底部导航栏 -->
		<view class="tab-bar">
			<tab-bar></tab-bar>
		</view>

		<buttonbox></buttonbox>
	</view>
</template>

<script>
	import {
		news_categories,
		getNewsBycategories,
		GetAllNews,
	} from '../../api/find/index.js';
	import {
		mhsearch
	} from '../../api/search/index.js';
	export default {
		data() {
			return {
				keyword: {
					keyword: '',
				},
				aList: [], // 初始数据
				bList: [], // 搜索数据
				Lists: [], // 展示的数据
				categories: [{
					id: '0',
					name: '全部新闻'
				}], // 从数据库获取的类别数据
				current: 0, // 预设当前项的值
				category: {
					category: '0',
				},

			};
		},
		onLoad() {
			this.GetAllNews();
			getNewsBycategories(this.category).then((res) => {
				this.Lists = res
				console.log(res);
			});
		},
		// onShow() {
		// 	this.$store.commit("changeTabbarIndex", 2)
		// },
		mounted() {
			this.getList();
		},
		methods: {
			searchClick(value) {
				// this.keyword.keyword = value;
				// console.log(this.keyword)
				// mhsearch(this.keyword).then((res) => {
				// 	// this.current=0;sss
				// 	this.Lists = res
				// })
			},
			getList() {
				GetAllNews().then((res) => {
					this.aList = res;
					this.Lists = res; // 初始化展示的数据
				})
			},
			GetAllNews() {
				news_categories().then((res) => {
					// 使用map方法遍历数组并修改category_name键为name
					var newData = res.map(function(item) {
						return {
							id: item.news_id,
							name: item.news_lb
						};
					});
					this.categories.push(...newData);
					console.log(this.categories);
				});
			},
			goDetail(e) {
				let detail = e;
				uni.navigateTo({
					url: "/pages-basic/findDetails/findDetails?detailDate=" + encodeURIComponent(JSON.stringify(
						detail))
				});
			},
			change(index) {
				console.log(index)
				this.category.category = index.news_id;
				getNewsBycategories(this.category).then((res) => {
					this.Lists = res
					console.log(res);
				});
			},
			click(index) {
				console.log(index)
			},
		}
	};
</script>


<style scoped lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.search-box {
		width: 90%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		padding: 10px;
	}

	.tab-bar {
		flex: 1;
	}

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
		width: 34vw;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

	}
</style>