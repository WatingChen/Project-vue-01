<template>
  <div id="app">
    <headerBar></headerBar>
    <div id="header"></div>
    <shop></shop>
    <router-view></router-view>
    <sbs></sbs>
    <support></support>
    <footerBar></footerBar>
    <goTop></goTop>
  </div>
</template>

<script>
import headerBar from '@/components/Header'// 引入头部
import footerBar from '@/components/Footer'// 引入尾部
import sbs from '@/components/Sbs'
import goTop from '@/components/Gotop'
import support from '@/components/Support'
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
</style>
