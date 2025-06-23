<template>
<!--  100vh:可视高度100%-->
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader/>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view/>
      </a-layout-content>
      <a-layout-footer class="footer">
        zjb-智能协同云图库 by zjb
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">

import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<style scoped>

#basicLayout .header {
  padding-inline: 20px;
  background: white;
  color: unset;
  margin-bottom: 15px;
}

#basicLayout .content {
  padding: 20px;
  /*linear-gradient(to right, #fefefe, #ffffff): 渐变色函数，渐变方向从左到右，颜色由#fefefe到#ffffff*/
  background: linear-gradient(to right, #fefefe, #ffffff);
  /*防止下面的内容被导航栏遮住*/
  margin-bottom: 28px;
}

#basicLayout .footer {
  background: #efefef;
  padding: 15px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
