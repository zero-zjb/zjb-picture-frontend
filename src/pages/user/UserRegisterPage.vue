<template>
  <div id="userRegisterPage">
    <h2 class="title">用户注册</h2>
    <div class="desc">企业级智能协同云图库</div>
    <a-form :model="formState" name="basic" autocomplete="off" @finish="handleSubmit">
      <a-form-item name="userAccount" :rules="[{ required: true, message: '请输入用户账号' }]">
        <a-input v-model:value="formState.userAccount" placeholder="请输入用户账号" />
      </a-form-item>

      <a-form-item
        name="userPassword"
        :rules="[
          { required: true, message: '请输入用户密码' },
          { min: 8, message: '密码长度不能小于8位' },
        ]"
      >
        <a-input-password v-model:value="formState.userPassword" placeholder="请输入用户密码" />
      </a-form-item>

      <a-form-item
          name="checkPassword"
          :rules="[
          { required: true, message: '请输入用户确认密码' },
          { min: 8, message: '确认密码长度不能小于8位' },
        ]"
      >
        <a-input-password v-model:value="formState.checkPassword" placeholder="请输入用户确认密码" />
      </a-form-item>

        <div class="tips">
            已有账号？
            <router-link to="/user/login">点击登录</router-link>
        </div>

      <a-form-item>
        <a-button type="primary" html-type="submit" style="width: 100%">注册</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import {userLoginUsingPost, userRegisterUsingPost} from "@/api/yonghuguanlijiekou.ts";
import {useLoginUserStore} from "@/stores/useLoginUserStore.ts";
import {message} from "ant-design-vue";
import router from "@/router";

const loginUserStore = useLoginUserStore()

//用于接收表单输入的值
const formState = reactive<API.UserRegisterRequest>({
  userAccount: '',
  userPassword: '',
  checkPassword: ''
})

/**
 * 提交表单
 * @param values
 */
const handleSubmit = async (values: any) => {
  //检验两次输入的密码是否一致
  if(values.userPassword !== values.checkPassword){
    message.error('两次输入的密码不一致');
    return;
  }
  const res = await userRegisterUsingPost( values);
  if(res.data.code === 0 && res.data.data){
      message.success('注册成功');
      router.push({
          path: '/user/login',
          //回退就回不到注册页了
          replace: true
      })
  }else{
    message.error('注册失败'+res.data.message);
  }
}

</script>

<style scoped>
#userRegisterPage {
    max-width: 360px;
    margin: 0 auto;
}

.title {
    text-align: center;
    margin-bottom: 16px;
}
.desc {
    text-align: center;
    margin-bottom: 16px;
    color: #bbb;
}

.tips {
    text-align: right;
    margin-top: 16px;
    margin-bottom: 16px;
    color: #bbb;
    font-size: 13px;
}
</style>
