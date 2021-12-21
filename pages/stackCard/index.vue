<template>
    <div class="body">
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
            
        </div>
        <div class="button">
            <div class="button1">
                <nuxt-link :to="{name:'index'}">基础轮播图</nuxt-link>
            </div>
        </div>
        <div class='left'>左</div>
        <div class='right'>右</div>
    </div>
</template>

<script>
import one from "@/static/img/1.jpeg";
import two from "@/static/img/2.jpeg";
import three from "@/static/img/3.jpeg";
import {stackCard} from "@/static/js/stackCard";

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
        stackCard();
    },
    head(){
        return{
            title:'堆叠轮播图'
        }
    },
};
</script>

<style scoped lang="css">
.body{
    position: relative;
    height: 400px;
}
.all{
    overflow: hidden;
    width: 1200px; /* 3倍的content(最低一层位置就在中间显示的左右两边) */
    position: relative;
    border: 2px solid rgb(120, 209, 127);
    margin: 0 auto;
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
</style>
