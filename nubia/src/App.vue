<template>
  <div id="app">
    <headerBar>我是头部</headerBar>
    <div id="header"></div>
    <shop></shop>
    <sbs></sbs>
    <support></support>
    <footerBar></footerBar>
    <goTop></goTop>
  </div>
</template>

<script>
import headerBar from '@/components/Header'// 引入头部
import footerBar from '@/components/Footer'// 引入尾部
import sbs from '@/views/Sbs'
import goTop from '@/views/Gotop'
import support from '@/views/Support'
import shop from '@/views/Shop'
// import {mapState} from 'vuex'
export default {
  data () {
    return {
      isShow: false
    }
  },
  mounted () {
  },
  // computed:{
  //   ...mapState("headerBar")
  // },
  components: {
    headerBar, // 头部
    footerBar, // 尾部
    sbs,
    goTop,
    support,
    shop
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
ul{
  list-style: none;
}
#header{
  height: 56px;
}
.show-enter-active {
    animation: move .5s;
}
@keyframes move {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
}
</style>
