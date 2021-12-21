<template>
    <div class="all">
        <div class="content">
            <div class="list" >
                <img :src='one' class="swiper" >
                <img :src='two' class="swiper" >
                <img :src='three' class="swiper" >
                <img :src='one' class="swiper" >
                <img :src='two' class="swiper" >
                <img :src='three' class="swiper" >
                <img :src='one' class="swiper" >
                <img :src='two' class="swiper" >
                <img :src='three' class="swiper" >
            </div>
        </div>
        <div class="button">
            <div class="button1">
                <nuxt-link :to="{name:'index'}">基础轮播图</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import one from "@/static/img/1.jpeg";
import two from "@/static/img/2.jpeg";
import three from "@/static/img/3.jpeg";
import {stackCard2} from "@/static/js/stackCard2";

export default {
    data(){
        return{
            one:one,
            two:two,
            three:three,
        }
    },
    created(){},
    mounted(){
        stackCard2();
    },
    head(){
        return{
            title:'堆叠轮播图2'
        }
    },
};
</script>

<style scoped lang="css">
.all{
    height: 400px;
    position: relative;
}
.content{
    /* overflow: hidden; */
    /* width: 400px;
    height: 300px; */
    width: 100px;
    height: 75px;
    position: relative;
    margin: 0 auto;
    border: 2px solid rgb(224, 95, 21);
}
.list{
    display: flex;
    position: absolute;
    justify-content: flex-start;
    top:0;
    left: 0;
}
.swiper{
    z-index: 1;
    width: 100px;
    height: 75px;
}
.button{
    display: flex;
    position: absolute;
    bottom: -80px;
    left: 0;
}
.button1{
    width: 100px;
    line-height: 40px;
    text-align: center;
    border: 1px solid red;
    margin-right: 20px;
}
.button2{
    width: 100px;
    line-height: 40px;
    text-align: center;
    border: 1px solid red;
}
</style>
