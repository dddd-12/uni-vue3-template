<route lang="json5" type="home">
  {
    style: {
      navigationStyle: 'custom',
      navigationBarTitleText: '首页',
    },
  }
  </route>

<template>
  <view
    class="bg-white overflow-hidden pt-2 px-4"
    :style="{ marginTop: safeAreaInsets?.top + 'px' }"
  >
    <view class="mt-12">
      <image src="/static/logo.png" alt="" class="w-28 h-28 block mx-auto" />
    </view>
    <view class="text-center max-w-100 m-auto text-4 indent mt-2">{{ description }}</view>
    <view class="text-center mt-8">
      当前平台是：
      <text class="text-green-500">{{ PLATFORM.platform }}</text>
    </view>
    <view class="flex-center mt-4">
      <wd-button @click="gotoUser">个人中心</wd-button>
    </view>
  </view>
</template>

<script setup>
import PLATFORM from '@/utils/platform'

defineOptions({
  name: 'Home',
})

const description = ref(
  'welcome uni-app',
)
// 测试 uni API 自动引入
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
console.log(safeAreaInsets)
onLoad(() => {
  console.log(description)
})

function gotoUser() {
  uni.navigateTo({
    url: '/pages/user/user'
  })
}
</script>

<style>
.main-title-color {
  color: #d14328;
}
</style>
