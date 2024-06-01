<template>
	<view class="login-page">
		<view class="logo">
			<image class="icon" src="/static/01.gif" mode="widthFix"></image>
		</view>
		<u-form labelPosition="left" :model="params" :rules="rules" ref="uForm" label-width="60" errorType="none">
			<u-form-item label="手机号" prop="mobile">
				<u-input v-model="params.mobile" border="bottom" placeholder="请输入手机号"></u-input>
			</u-form-item>
			<u-form-item label="密码" prop="password">
				<u-input v-model="params.password" border="bottom" placeholder="请输入密码"
					:type="pwdTypeStatus?'text':'password'">
					<template slot="suffix">
						<u-icon @click="pwdTypeStatus=!pwdTypeStatus" :name="pwdTypeStatus?'eye-fill':'eye-off'"
							size="22"></u-icon>
					</template>
				</u-input>
			</u-form-item>
		</u-form>
		<u-gap height="40"></u-gap>
		<u-button @click="pwdLogin" type="primary">登录</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pwdTypeStatus: false,
				params: {
					mobile: '',
					password: '',
				},
				rules: {
					mobile: {
						type: 'string',
						required: true,
						message: '请填写正确的手机号',
					},
					password: {
						type: 'string',
						required: true,
						message: '请填写密码',
					},
				},
			};
		},
		methods: {
			pwdLogin() {
				this.$refs.uForm.validate().then(res => {
					uni.showLoading({
						title: "正在登录"
					})
					setTimeout(() => {
						uni.showToast({
							title: "登录成功"
						})
						uni.setStorageSync('mobile', this.params.mobile)
						// uni.setStorageSync('isLogged', true)
						uni.reLaunch({
							url: '/pages/my/index'
						})
					}, 1000)
				}).catch(errors => {
					uni.$u.toast(errors[0].message)
				})
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules)
		},
	};
</script>
<style scoped lang="scss">
	.login-page {
		padding: 60rpx;
		box-sizing: border-box;

		.logo {
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 200rpx 0 100rpx 0;

			.icon {
				width: 200rpx;
			}
		}
	}
</style>