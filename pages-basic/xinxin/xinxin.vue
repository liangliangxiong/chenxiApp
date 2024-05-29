<template>
	<view>
		<view>
			<view class="page-body">
				<view class="page-section page-section-gap" style="text-align: center;">
					<audio style="text-align: left" :src="current.src" :poster="current.poster" :name="current.name"
						:author="current.author" :action="audioAction" controls></audio>
				</view>
			</view>
		</view>
		<view>
			<view class="uni-padding-wrap uni-common-mt">
				<view>
					<video id="myVideo" :src=vidoesrc
						@error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls></video>
				</view>
				<view class="uni-list uni-common-mt">
					<view class="uni-list-cell">
						<view>
							<view class="uni-label">弹幕内容</view>
						</view>
						<view class="uni-list-cell-db">
							<input v-model="danmuValue" class="uni-input" type="text" placeholder="在此处输入弹幕内容" />
						</view>
					</view>
				</view>
				<view class="uni-btn-v">
					<button @click="sendDanmu" class="page-body-button">发送弹幕</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: {
					poster: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/music-a.png',
					name: '致爱丽丝',
					author: '暂无',
					src: 'https://web-ext-storage.dcloud.net.cn/uni-app/ForElise.mp3',
				},
				vidoesrc:'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4',
				audioAction: {
					method: 'pause'
				},
				src: '',
				danmuList: [{
						text: '第 1s 出现的弹幕',
						color: '#ff0000',
						time: 1
					},
					{
						text: '第 3s 出现的弹幕',
						color: '#ff00ff',
						time: 3
					}
				],
				danmuValue: ''
			}
		},
		onReady: function(res) {
			this.videoContext = uni.createVideoContext('myVideo')
		},
		methods: {
			sendDanmu: function() {
				this.videoContext.sendDanmu({
					text: this.danmuValue,
					color: this.getRandomColor()
				});
				this.danmuValue = '';
			},
			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
			getRandomColor: function() {
				const rgb = []
				for (let i = 0; i < 3; ++i) {
					let color = Math.floor(Math.random() * 256).toString(16)
					color = color.length == 1 ? '0' + color : color
					rgb.push(color)
				}
				return '#' + rgb.join('')
			}
		}
	}
</script>