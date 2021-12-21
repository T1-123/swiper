<template>
    <div class="all">
        <div class="content">
            <div class="list" >
                <img :src='three' class="swiper" >
                <img :src='one' class="swiper" >
                <img :src='two' class="swiper" >
                <img :src='three' class="swiper" >
                <img :src='one' class="swiper" >
            </div>
        </div>
        <div class='left'>左</div>
        <div class='right'>右</div>
        <div class="button">
            <!-- <p>路由传值:{{$route.params.id}}</p> -->
            <div class="button1">
                <nuxt-link :to="{name:'index'}">基础轮播图</nuxt-link>
            </div>
            <!-- <div class="button2">
                <nuxt-link :to="{name:'card'}">卡片轮播图</nuxt-link>
            </div> -->
        </div>
    </div>
</template>

<script>
import one from "@/static/img/1.jpeg";
import two from "@/static/img/2.jpeg";
import three from "@/static/img/3.jpeg";
import {seamless} from "@/static/js/seamless";

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
        seamless();
    },
    head(){
        return{
            title:'无缝轮播图'
        }
    },
};
</script>

<style scoped lang="css">
.all{
    height: 400px;
    position: relative;
}
.left{
    position: absolute;
    width: 50px;
    text-align: center;
    line-height: 50px;
    left: 0;
    top: 30%;
    background-color: chartreuse;
}
.right{
    position: absolute;
    width: 50px;
    line-height: 50px;
    text-align: center;
    right: 0;
    top: 30%;
    background-color: rgb(255, 187, 0);
}
.content{
    /* overflow: hidden; */
    width: 400px;
    height: 300px;
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
    z-index: -1;
    width: 400px;
    height: 300px;
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
