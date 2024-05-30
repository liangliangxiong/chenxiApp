<script>
	export default {
		onLaunch: function() {
			// uni.hideTabBar(); 
			// 看手机是不是iPhoneX
			uni.getSystemInfo({
				success: res => {
					if (res.model.indexOf('iPhone X') > -1) {
						this.$store.commit("system/SET_IPX", {
							isIpx: true
						});
					}
				}
			});
			console.log('App Launch')
		},
		onShow: function() {
			// uni.hideTabBar();
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	// .status_bar{
	// 	height: var(--status-bar-height);
	// 	width: 100%;
	// }
</style>