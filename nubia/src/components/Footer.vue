<template>
    <div>
        <div id="footerMenu">
            <ul>
                <li v-for="data in datalist" :key="data.name">
                    <p>{{data.name}}</p>
                    <ul>
                        <li v-for="(data2,index) in datalist2" :key="index">
                            {{data2[index].title}}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
// import http from '@/util/http'
import axios from 'axios'
export default {
    data(){
        return {
            datalist:[],
            datalist2:[]
        }
    },
    mounted () {
        axios.get('/show/page/footerMenu').then(res=>{
            console.log(res.data.data.result)
            this.datalist = res.data.data.result
            this.datalist.map(item=>{
                console.log(item.menus_list)
                this.datalist2.push(item.menus_list)
            })
            console.log(this.datalist2)
        })
    }
}
</script>
