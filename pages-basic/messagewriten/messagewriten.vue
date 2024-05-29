<template>
	<view class="form-container">
		<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
		<u--form labelPosition="left" :model="model1" :rules="rules" ref="uForm">
			<u-form-item label="姓名" prop="userInfo.name" borderBottom ref="item1">
				<u--input v-model="model1.userInfo.name" border="none" class="input-field"></u--input>
			</u-form-item>
			<u-form-item label="性别" prop="userInfo.sex" borderBottom @click="showSex = true; hideKeyboard()"
				ref="item2">
				<u--input v-model="model1.userInfo.sex" disabled disabledColor="#ffffff" placeholder="请选择性别"
					border="none" class="input-field"></u--input>
				<u-icon slot="right" name="arrow-right" class="icon-right"></u-icon>
			</u-form-item>
			<u-form-item label="年龄" prop="userInfo.age" borderBottom ref="item3">
				<u--input v-model="model1.userInfo.age" border="none" class="input-field" type="number"
					placeholder="请输入年龄"></u--input>
			</u-form-item>
			<u-form-item label="血糖" prop="userInfo.xuetang" borderBottom ref="item4">
				<u--input v-model="model1.userInfo.xuetang" border="none" class="input-field" type="number"
					placeholder="请输入血糖"></u--input>
			</u-form-item>
			<u-form-item label="血压" prop="userInfo.xueya" borderBottom ref="item5">
				<u--input v-model="model1.userInfo.xueya" border="none" class="input-field" type="number"
					placeholder="请输入血压"></u--input>
			</u-form-item>
			<view class="button-group">
				<u-button type="primary" @click="submitForm">提交</u-button>
				<u-button type="default" @click="resetForm">重置</u-button>
			</view>
		</u--form>
		<u-action-sheet :show="showSex" :actions="actions" title="请选择性别" @close="showSex = false" @select="sexSelect">
		</u-action-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showSex: false,
				model1: {
					userInfo: {
						name: '',
						sex: '',
						age: '',
						xuetang: '',
						xueya: '',
					},
				},
				actions: [{
						name: '男'
					},
					{
						name: '女'
					},
				],
				rules: {
					'userInfo.name': {
						type: 'string',
						required: true,
						message: '请填写姓名',
						trigger: ['blur', 'change']
					},
					'userInfo.sex': {
						type: 'string',
						required: true,
						message: '请选择性别',
						trigger: ['blur', 'change']
					},
					'userInfo.age': {
						type: 'number',
						required: true,
						message: '请输入年龄',
						trigger: ['blur', 'change']
					},
					'userInfo.xuetang': {
						type: 'number',
						required: true,
						message: '请输入血糖',
						trigger: ['blur', 'change']
					},
					'userInfo.xueya': {
						type: 'number',
						required: true,
						message: '请输入血压',
						trigger: ['blur', 'change']
					},
				},
			};
		},
		methods: {
			sexSelect(e) {
				this.model1.userInfo.sex = e.name;
				this.$refs.uForm.validateField('userInfo.sex');
			},
			hideKeyboard() {
				// 隐藏键盘逻辑
			},
			submitForm() {
				console.log(this.model1.userInfo);
				// this.$refs.uForm.validate((valid) => {
				// 	if (valid) {

				// 	} else {
				// 		console.log('表单验证失败');
				// 		return false;
				// 	}
				// });
			},
			resetForm() {
				this.$refs.uForm.resetFields();
				this.model1.userInfo = {
					name: '',
					sex: '',
					age: '',
					xuetang: '',
					xueya: '',
				};
			}
		},
		onReady() {},
	};
</script>

<style scoped>
	.form-container {
		padding: 20px;
		background-color: #f8f8f8;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.input-field {
		padding: 10px;
		background-color: #ffffff;
		border: 1px solid #ddd;
		border-radius: 4px;
		margin-bottom: 10px;
	}

	.icon-right {
		color: #888;
		font-size: 18px;
	}

	.button-group {
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
	}

	.u--form-item {
		margin-bottom: 20px;
	}

	.u--form-item:last-child {
		margin-bottom: 0;
	}
</style>