<template>
  <div>
    <headerBar></headerBar>
    <div id="header"></div>
    <div class="cg" v-for="item in mainProduct" :key="item.spec_id">
      <div>
        <img :src="item.big_image" :alt="item.title">
      </div>
    </div>
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
import axios from 'axios'
export default {
  data () {
    return {
      id:'',
      mainProduct:[]
    }
  },
  // beformounted() {
  //   this.id = this.$route.params.id.split('=')[1]
  // },
  mounted() {
    // console.log(this.$route.params)
    this.id = this.$route.params.id.split('=')[1]
    console.log(this.id)
    if (this.id){
      axios.get(`/show/page/phone/${this.id}`).then(res=>{
          // console.log(res.data)
          this.mainProduct = res.data.data.exhibit_info[0].exhibit_items
          // console.log(this.mainProduct)
      })
    }
  },
  components: {
    headerBar, // 头部
    footerBar, // 尾部
    sbs,
    goTop,
    support
  }
}
</script>
<style lang="scss" scoped>
.cg {
  position: relative;
  overflow: hidden;
  width: 100%;
  color: #333333;
  border-top: 0.3rem solid #fff;
  img {
    width: 100%;
    vertical-align: middle;
  }
}
.cg:first-child {
    border-top: none;
}
</style>
