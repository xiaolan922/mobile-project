<template>
    <div id="container">
        <van-nav-bar
            title="黑马面面"
            right-text="搜索"
            @click-right="$router.push('/search')"
        />
        <div class="my-wrapper" >
            <router-view></router-view>
        </div>
        <van-tabbar route>
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="chat-o">问答</van-tabbar-item>
            <van-tabbar-item icon="video-o">视频</van-tabbar-item>
            <van-tabbar-item icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
   name: ''
}
</script>

<style lang="less" scoped>
.container{
  width: 100%;
  height: 100%;
  position: relative;
  .my-wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 92px;
    padding-bottom: 100px;
    box-sizing: border-box;
    &.noTop{
      padding-top: 0;
    }
  }
}
</style>