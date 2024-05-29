<template>
	<div class="search-box">
		<input v-model="keyword" type="text" class="search-input" :placeholder="placeholder" @keyup.enter="search">
		<button @click="search" class="search-button">搜索</button>
	</div>
</template>

<script>
	export default {
		name: "search",
		props: {
			placeholder: {
				type: String,
				default: "搜索"
			},
			type: {
				type: String,
				default: 'navigator'
			}
		},
		data() {
			return {
				keyword: ''
			};
		},
		methods: {
			search() {
				if (this.type === 'navigator') {
					// 如果 type 为 navigator，则跳转到搜索页面
					this.navigateToSearch();
				} else {
					// 否则执行搜索操作
					this.doSearch();
				}
			},
			navigateToSearch() {
				// 在这里可以根据实际需求进行路由跳转
				console.log('跳转到搜索页面');
			},
			doSearch() {
				// 在这里执行搜索操作
				console.log('搜索关键词:', this.keyword);
			}
		}
	}
</script>

<style scoped>
	.search-box {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.search-input {
		flex: 1;
		height: 36px;
		padding: 0 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 14px;
	}

	.search-button {
		height: 36px;
		padding: 0 16px;
		margin-left: 10px;
		border: none;
		border-radius: 4px;
		background-color: #3c9cff;
		color: #fff;
		cursor: pointer;
		font-size: 14px;
		border: none;
	}

	.search-button:hover {
		background-color: #0056b3;
	}
</style>