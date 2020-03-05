<template>
    <transition name="go">
        <div id="sideBar" @touchmove.prevent.stop @mousewheel.prevent >
            <p @click="backHome()">X</p>
        </div>
    </transition>
</template>

<script>
export default {
    data () {
        return {
        isShow: false
        }
    },
    methods:{
        backHome(){
            console.log(1)
            console.log(this.isShow)
            this.isShow = false
        }
    }
}
</script>

<style lang="scss" scoped>
#sideBar {
    background:#99f;
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    z-index: 999999
}
.go-leave-active {
    animation: move .5s;
}
@keyframes move {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}
</style>
