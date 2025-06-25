import router from "@/router";
import {useLoginUserStore} from "@/stores/useLoginUserStore.ts";
import {message} from "ant-design-vue";


//是否为首次获取登录用户
let isFirstGetLoginUser = true;
/**
 * 全局权限校验，每次切换页面都会执行
 */
router.beforeEach(async (to, from, next) => {
    const loginUserStore = useLoginUserStore();
    let loginUser = loginUserStore.loginUser;
    if(isFirstGetLoginUser){
        await loginUserStore.fetchLoginUser();
        loginUser = loginUserStore.loginUser;
        isFirstGetLoginUser = false;
    }
    const toUrl = to.fullPath;
    if(toUrl.startsWith('/admin')){
        if(!loginUser || loginUser.userRole !== 'admin'){
            message.error('权限不够，或者未登录')
            next(`/user/login?redirect=${to.fullPath}`)
            return
        }
    }
    next()//放行
})
