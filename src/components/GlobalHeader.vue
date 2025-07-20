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
            <a-dropdown>
              <a-space>
                <a-avatar src="useLoginUser.loginUser.userAvatar"></a-avatar>
                {{ useLoginUser.loginUser.userName ?? '无名' }}
              </a-space>
              <template #overlay>
                <a-menu>
                  <a-menu-item @click="doLogout">
                    <LogoutOutlined />
                    退出登录
                  </a-menu-item>
                  <a-menu-item>
                    <router-link to="/my_space">
                      <UserOutlined />
                      我的空间
                    </router-link>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
          <div v-else>
            <a-button type="primary" class="user-login-status" @click="router.push('/user/login')"> 登录 </a-button>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts" setup>
import {computed, h, ref} from 'vue'
import { HomeOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons-vue'
import type { MenuProps } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { useLoginUserStore } from '@/stores/useLoginUserStore.ts'
import {userLogoutUsingPost} from "@/api/yonghuguanlijiekou.ts";
import {message} from "ant-design-vue";
const useLoginUser = useLoginUserStore()

// 当前高亮菜单项，应动态获取菜单路径，可以使用router的钩子函数获取
const current = ref<string[]>([])

const originItems = [
    {
        key: '/',
        icon: () => h(HomeOutlined),
        label: '主页',
        title: '主页',
    },
    {
      key: '/add_picture',
      label: '创建图片',
      title: '创建图片',
    },
    {
        key: '/admin/userManage',
        label: '用户管理',
        title: '用户管理',
    },
    {
      key: '/admin/pictureManage',
      label: '图片管理',
      title: '图片管理',
    },
    {
        key: '/admin/spaceManage',
        label: '空间管理',
        title: '空间管理',
    },
    {
        key: 'others',
        label: h('a', { href: 'https://www.baidu.com/', target: '_blank' }, '百度'),
        title: '编程导航',
    },
]
//根据权限过滤菜单项
const filterMenu = (menu = [] as MenuProps['items']) => {
  return menu?.filter((menu) => {
    if(menu?.key?.startsWith('/admin')){
        const loginUser = useLoginUser.loginUser;
        if(!loginUser || loginUser.userRole !== 'admin'){
            return false;
        }
    }
    return true;
  })
}
//展示菜单中的路由数组
const items = computed(()=> filterMenu(originItems))

//路由跳转事件
const router = useRouter()
const doMenuClick = ({ key }) => {
  //跳转路由
  router.push(key)
}

//退出登录
const doLogout = async () => {
    const res = await userLogoutUsingPost();
    if(res.data.code === 0){
        const res = await userLogoutUsingPost();
        useLoginUser.setLoginUser({
            userName: '未登录',
        });
        message.success('退出登录成功')
        router.push('/user/login');
    }else{
        message.error('退出登录失败'+res.data.message);
    }
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
