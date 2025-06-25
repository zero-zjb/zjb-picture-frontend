

<template>
  <div id="app">
    <a-config-provider :locale="locale">
      <BasicLayout/>
    </a-config-provider>
  </div>
</template>


<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import BasicLayout from "@/layouts/BasicLayout.vue";
import {useLoginUserStore} from "@/stores/useLoginUserStore.ts";
import {ref} from "vue";

// const useLoginUser = useLoginUserStore();
// useLoginUser.fetchLoginUser();

const locale = ref(zhCN);
</script>


<style scoped>

</style>
