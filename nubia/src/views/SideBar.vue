<template>
    <div id="sideBar" @touchmove.prevent.stop @mousewheel.prevent>
        <i class="iconfont icon-close" @click="backHome()"></i>
        <div class="box">
            <p class="nologin" v-if="login==0">欢迎访问努比亚官网，请<router-link to="/login" tag="span">登录</router-link></p>
            <p class="islogin" v-else>
                欢迎您，<span>1111</span>
                <van-image class="touxiang" round width="70px" height="70px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </p>
        </div>
        <ul>
            <li v-for="data in datalist" :key="data.name">
                <van-cell-group>
                    <van-cell :title="data.name" @click="handleClick(data.view_url,data.url)" />
                </van-cell-group>
            </li>
        </ul>
        <form action="/">
            <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel"/>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { Cell, CellGroup, Toast, Search, Image } from 'vant'

Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Search)
Vue.use(Image)
export default {
    data () {
        return {
            datalist: null,
            value:'',
            login:0
        }
    },
    methods:{
        backHome(){
            this.$emit('backEvent', 'go')
        },
        onSearch(val) {
            Toast(val)
        },
        onCancel() {
            Toast('取消')
        },
        handleClick (id, url) {
            this.$router.push(`${url}/${id}`)
        }
    },
    mounted (){
        axios.get('/show/page/headMenu').then(res=>{
            // console.log(res.data.data.result)
            this.datalist = res.data.data.result
            this.url = res.data.data.result.map((item, index)=>{
                // console.log(item.url)
                // console.log(item.url.replace('https://m.nubia.com', ''))
                this.datalist[index].view_url = item.view_url.split('?')[1]
                this.datalist[index].url = item.url.replace('https://m.nubia.com', '')
            })
            // console.log(this.datalist)
        })
        if (localStorage.getItem("token")) {
            this.login = 1
        }
    }
}
</script>

<style lang="scss" scoped>
#sideBar {
    background:#fff;
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    z-index: 999999;
    padding:20px;
    .box{
        height: 100px;
        width: 100%;
        position: relative;
        font:20px/100px "";
        padding-left: 20px;
        span{
            color:#f00;
        }
        .touxiang{
            position: absolute;
            right: 30px;
            top:10px
        }
    }
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
