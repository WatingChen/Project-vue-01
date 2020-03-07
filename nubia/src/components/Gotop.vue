<template>
    <div id="gotop" @click="backTop" v-show="isShow">
        ↑
    </div>
</template>

<script>
export default {
    data(){
        return {
            isShow:false
        }
    },
    mounted () {
    window.addEventListener('scroll', this.scrollToTop)
    },
    destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
    },
    methods:{
        // 点击图片回到顶部方法，加计时器是为了过渡顺滑
        backTop () {
            const that = this
            const timer = setInterval(() => {
                const ispeed = Math.floor(-that.scrollTop / 5)
                document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                if (that.scrollTop === 0) {
                clearInterval(timer)
                }
            }, 16)
        },
        // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
        scrollToTop () {
            const that = this
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            that.scrollTop = scrollTop
            if (that.scrollTop > 56) {
            that.isShow = true
            } else {
            that.isShow = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    #gotop{
        width:35px;
        height: 35px;
        text-align: center;
        font:600 24px/35px "";
        border-radius: 50%;
        background: #fff;
        border:1px solid #eee;
        color:#333;
        position: fixed;
        right:20px;
        bottom:50px;
        z-index: 9999;
    }
</style>
