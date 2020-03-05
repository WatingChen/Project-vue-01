<template>
    <div>
        <div id="tou">
            <div class="left menu" @click="sideBarShow(),backTop()">
                <img src="//shop-soa-static.nubia.com/images/newVersion/menu.png" alt="">
            </div>
            <div class="center">
                <a href="/">
                    <img src="//shop-soa-static.nubia.com/images/newVersion/logo.png" alt="" class="logo">
                </a>
            </div>
            <div>车</div>
        </div>
        <transition name="show">
            <sideBar id="sideBar" v-show="isShow"></sideBar>
        </transition>
    </div>
</template>

<script>
import sideBar from '@/views/SideBar'
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    sideBarShow(){
      this.isShow = true
    },
    backTop () {
        const ispeed = Math.floor(-this.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + ispeed
    }
  },
  components: {
    sideBar
  }
}
</script>

<style lang="scss" scoped>
    #tou{
        height:56px;
        width:100%;
        background:#fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        box-sizing: border-box;
        position: fixed;
        z-index:99;
        .menu{
            width:25px;
            height:25px;
            img{
                width: 100%;
            }
        }
        .center{
            height: 40px;
            width:180px;
            a{
                display: block;
                width:100%;
                padding-top:7px;
                img{
                    width: 100%;
                }
            }
        }
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
