<template>
  <div id="globalHeader">
    <!--    :wrap="false"：取消自动换行-->
    <a-row :wrap="false">
      <a-col flex="200px">
        <router-link to="/">
          <div class="title-bar">
            <!--   alt="logo":当图片没有加载出来的时候，就显示“logo”文字   -->
            <img class="logo" src="../assets/logo.png" alt="logo" />
            <span class="title">zjb云图库</span>
          </div>
        </router-link>
      </a-col>
      <a-col flex="auto">
        <!--        selectedKeys="current": 代表当前高亮的菜单项-->
        <a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
          @click="doMenuClick"
        />
      </a-col>
      <a-col flex="100px">
        <div class="user-login-status">
          <div v-if="useLoginUser.loginUser.id">
            {{ useLoginUser.loginUser.userName ?? '无名' }}
          </div>
          <div v-else>
            <a-button type="primary" class="user-login-status"> 登录 </a-button>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts" setup>
import { h, ref } from 'vue'
import { HomeOutlined } from '@ant-design/icons-vue'
import type { MenuProps } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { useLoginUserStore } from '@/stores/useLoginUserStore.ts'
const useLoginUser = useLoginUserStore()
// 当前高亮菜单项，应动态获取菜单路径，可以使用router的钩子函数获取
const current = ref<string[]>([])

const items = ref<MenuProps['items']>([
  {
    key: '/',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
  },
  {
    key: '/about',
    label: '关于',
    title: '关于',
  },
  {
    key: 'others',
    label: h('a', { href: 'https://www.baidu.com/', target: '_blank' }, '百度'),
    title: '编程导航',
  },
])

//路由跳转事件
const router = useRouter()
const doMenuClick = ({ key }) => {
  //跳转路由
  router.push(key)
}

//router的钩子函数,在页面跳转之后执行，from：上一个路由，to：当前路由,next：下一个路由
router.afterEach((to, from, next) => {
  current.value = [to.path]
})
</script>

<style scoped>
#globalHeader .title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: black;
  font-size: 18px;
  margin-left: 16px;
}

.logo {
  height: 48px;
}
</style>
