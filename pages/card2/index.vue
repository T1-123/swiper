<template>
    <div class="body">
        <div class="all">
            <!-- swiper的盒子模型大小要与content保持一致 -->
            <div class="content">
                <div class="list" >
                    <img :src='one' class="swiper" >
                    <img :src='two' class="swiper" >
                    <img :src='three' class="swiper" >
                    <img :src='four' class="swiper" >
                    <img :src='five' class="swiper" >
                    <img :src='six' class="swiper" >
                    <img :src='seven' class="swiper" >
                </div>
            </div>
        </div>
        <div class='right'>右</div>
        <div class="button">
            <div class="button1">
                <nuxt-link :to="{name:'index'}">基础轮播图</nuxt-link>
            </div>
            <!-- <div class="button1">
                <nuxt-link :to="{name:'seamless'}">无缝轮播图</nuxt-link>
            </div>
            <div class="button1">
                <nuxt-link :to="{name:'card'}">卡片轮播图</nuxt-link>
            </div> -->
        </div>
    </div>
</template>

<script>
import one from "@/static/img/1.jpeg";
import two from "@/static/img/2.jpeg";
import three from "@/static/img/3.jpeg";
import four from "@/static/img/4.jpeg";
import five from "@/static/img/5.jpeg";
import six from "@/static/img/6.jpeg";
import seven from "@/static/img/7.jpeg";
import {card2_swiper} from "@/static/js/card2_swiper";

export default {
    data(){
        return{
            one:one,
            two:two,
            three:three,
            four:four,
            five:five,
            six:six,
            seven:seven,
        }
    },
    created(){},
    mounted(){
        card2_swiper();
    },
    head(){
        return{
            title:'网易云效果'
        }
    },
};
</script>

<style scoped lang="css">
.body{
    height: 500px;
    position: relative;
    display: flex;
    justify-content: center;

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
.all{
    /* overflow: hidden; */
    width: 800px;
    /* margin: 0 auto; */
    height: 400px;
    position: relative;
    border: 2px solid rgba(189, 105, 57, 0.774);
    /* margin-right: 200px; */
}
.content{
    width: 400px;
    height: 300px;
    position: absolute;
    right: 0;
    /* margin: 0 auto; */
    border: 2px solid rgb(224, 95, 21);
}
.list{
    display: flex;
    position: absolute;
    top:0;
    left: 0;
}
.swiper{
    z-index: -1;
    width: 400px;
    height: 300px;
    box-sizing:content-box;
}
.button{
    display: flex;
    align-content: center;
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
</style>
