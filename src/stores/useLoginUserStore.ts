import { defineStore } from 'pinia'
import { ref } from 'vue'

/**
 * 用户信息状态
 */
export const useLoginUserStore = defineStore('loginUser', () => {
  const loginUser = ref<any>({
    userName: '未登录',
  })

  /**
   * 获取用户信息
   */
  async function fetchLoginUser() {
    // todo 由于后端还没提供接口，暂时注释
    // const res = await getCurrentUser();
    // if (res.data.code === 0 && res.data.data) {
    //   loginUser.value = res.data.data;
    // }
    setTimeout(() => {
      loginUser.value = { userName: 'admin', id: 1 }
    }, 2000)
  }

  /**
   * 设置用户信息
   * @param newLoginUser
   */
  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser
  }

  return { loginUser, setLoginUser, fetchLoginUser }
})
