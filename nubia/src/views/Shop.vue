<template>
    <div class="all">
        <div class="cg" v-for="item in datalist" :key="item.title">
            <div>
                <img :src="item.big_image" :alt="item.title">
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            datalist:[]
        }
    },
    mounted (){
        axios.get('/show/page/shop').then(res=>{
            console.log(res.data.data.exhibit_info[0].exhibit_items)
            this.datalist = res.data.data.exhibit_info[0].exhibit_items
        })
    }
}
</script>
<style lang="scss" scoped>
.all {
    width: 100%;
    .cg {
        position: relative;
        overflow: hidden;
        width: 100%;
        color: #333333;
        border-top: 0.3rem solid #fff;
    }
    .cg:first-child {
        border-top: none;
    }
    .cg > div > img {
        width: 100%;
    }
}
</style>
