<template>
  <div id="app">
    <headerBar>我是头部</headerBar>
    <div id="header"></div>
    <div id="content">内容</div>
    <footerBar>我是尾部</footerBar>
  </div>
</template>

<script>
import headerBar from '@/components/Header'// 引入头部
import footerBar from '@/components/Footer'// 引入尾部
// import {mapState} from 'vuex'
export default {
  mounted () {
  },
  // computed:{
  //   ...mapState("headerBar")
  // },
  components: {
    headerBar, // 头部
    footerBar // 尾部
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
#content{
  height:1000px;
  background:#ff9;
}
</style>
