<template>
    <div>
        <div id="support">
            <van-collapse v-model="activeName" accordion>
                <van-collapse-item :title="data.name" :name="index+1" v-for="(data,index) in datalist" :key="data.name">
                    <ul id="menu">
                        <li v-for="data2 in data.menus_list" :key="data2.title">{{data2.title}}</li>
                    </ul>
                </van-collapse-item>
            </van-collapse>
        </div>
        <div class="service">
            <a href="tel:4007006600" class="serviceInfo">
                <p>全国服务热线</p>
                <p style="font-size: 1.25rem; font-weight: bold; color: rgb(51, 51, 51);">400-700-6600</p>
                <p>8:30-20:30 （全年无休）</p>
            </a>
            <a href="/live800.php?a=showchatbox" class="serviceBtn">
                <img src="//shop-soa-static.nubia.com/images/newVersion/message(white).png">在线客服
			</a>
        </div>
        <div class="other">
            <div class="otherLeft">
				关注我们
				<a><img src="//shop-soa-static.nubia.com/images/newVersion/wx.png" /></a>
                <a href="https://weibo.com/nubiamobile">
                    <img src="//shop-soa-static.nubia.com/images/newVersion/wb.png">
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import { Collapse, CollapseItem } from 'vant'
Vue.use(Collapse)
Vue.use(CollapseItem)
export default {
    data(){
        return {
            datalist:[],
            activeName: '1'
        }
    },
    mounted (){
        axios.get('/show/page/footerMenu').then(res=>{
            // console.log(res.data.data.result)
            this.datalist = res.data.data.result
        })
    }
}
</script>
<style lang="scss" scoped>
#support{
    ul{
        padding: 0 10px;
        li{
            color:#333;
            margin:10px 0;
        }
    }
}
.service {
    height: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #DCDCDC;
    margin-top: 16px;
    padding:0 10px;
    padding-bottom: 16px;
    .serviceInfo {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        font-style: normal;
        text-decoration: none;
        p {
            font-size: 14px;
            color: #999999;
            line-height: 28px;
        }
    }
    .serviceBtn {
        width: 38%;
        height: 33%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 32px;
        font-size: 14px;
        background: #666666;
        color: #fff!important;
        img {
            width: 24px;
            margin-right: 8px;
        }
    }
}
.other {
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #DCDCDC;
    padding:0 10px;
    .otherLeft {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 14px;
        color: #999999;
        a {
            display: inline-block;
            margin-left: 8px;
            img {
                width: 22px;
            }
        }
    }
}
</style>
