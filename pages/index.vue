<template>
  <div class="all">
    <div class="content">
      <div class="list" >
        <img :src='one' class="swiper" >
        <img :src='two' class="swiper" >
        <img :src='three' class="swiper" >
      </div>
    </div>
    <div class="button">
      <div class="button1">
        <nuxt-link :to="{name:'seamless',params:{id:123}}">无缝轮播图</nuxt-link>
      </div>
      <div class="button1">
        <nuxt-link :to="{name:'card'}">卡片轮播图</nuxt-link>
      </div>
      <div class="button1">
        <nuxt-link :to="{name:'card2'}">网易云效果</nuxt-link>
      </div>
      <div class="button1">
        <nuxt-link :to="{name:'stackCard'}">堆叠轮播图</nuxt-link>
      </div>
      <!-- <div class="button1">
        <nuxt-link :to="{name:'stackCard2'}">堆叠轮播图2</nuxt-link>
      </div> -->
    </div>
  </div>
</template>

<script>
import one from "@/static/img/1.jpeg";
import two from "@/static/img/2.jpeg";
import three from "@/static/img/3.jpeg";
// import four from "@/static/img/4.jpeg";
// import five from "@/static/img/5.jpeg";
// import six from "@/static/img/6.jpeg";
// import seven from "@/static/img/7.jpeg";
import {swiper} from "@/static/js/swiper";


export default {
  name: "IndexPage",
  data(){
    return{
      one:one,
      two:two,
      three:three,
      // four:four,
      // five:five,
      // six:six,
      // seven:seven,

      timer:null,//定时器
      interval:6000,//定时器时间
      direction:"left",//默认向左
      show_num: 2, //轮播元素数量
      show_index: 0, //当前显示索引
    }
  },
  created(){
    // this.set_time();
    // swiper();
  },
  mounted(){
    swiper();
    // window.addEventListener(swiper())
  },
  methods:{
    // swiperDeviation();
    // translate(className,index){
    //   const SHOW_INDEX = this.show_index;
    //   if(SHOW_INDEX == index){
    //     if(this.direction == "left"){
    //       return `${className} translate_left`;
    //     }else{
    //       return `${className} translate_right`;
    //     }
    //   }
    //   if((SHOW_INDEX - 1 < 0 ? this.show_num : SHOW_INDEX - 1 ) == index){
    //     if(this.direction == "left"){
    //       return `${className} translate_fist_left`
    //     }
    //   }
    //   if((SHOW_INDEX + 1 > this.show_num ? 0 : SHOW_INDEX + 1 ) == index){
    //     if(this.direction == "right"){
    //       return `${className} translate_end_right`
    //     }
    //   }
    // },
    // set_time(){
    //   this.timer = setInterval(this.set_action.bind(this),this.interval);
    // },
    // set_action(direction = 'left'){
    //   this.direction = direction
    //   !!this.timer && clearInterval(this.timer);
    //   const SHOW_INDEX = this.show_index;
    //   if(direction === "left"){
    //     if(SHOW_INDEX  == this.show_num){
    //       this.show_index = 0
    //     }else{
    //       this.show_index = SHOW_INDEX +1
    //     }
    //   }else{
    //     if(SHOW_INDEX == 0){
    //       this.show_index = this.show_num
    //     }else{
    //       this.show_index = SHOW_INDEX -1
    //     }
    //   }
    //   this.set_time()
    // }
  }
};
</script>

<style scoped lang="css">
.all{
  height: 400px;
  position: relative;
}
.content{
  /* overflow: hidden; */
  width: 400px;
  height: 300px;
  position: relative;
  margin: 0 auto;
  border: 2px solid rgb(224, 95, 21);
  /* position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%); */
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
.translate_left{
  /* animation: translateLeft 500ms ease;
  @keyframes translateLeft {
    0%{
      width: 400px;
      height: 300px;
    }
    100%{
      width: 500px; 
      height: 500px;
    }
  } */

  /* @keyframes translateLeft {
    from{
      transform: translateX(0);
    }
    to{
      transform: translateX(100px);
    }
  } */
  /* width: 500px; 
  height: 500px;
  background: chartreuse;
  transform: translateX(100px); */
}
/* .translate_right{
  animation: translateRight 500ms ease;
  @keyframes translateRight {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
}
.translate_fist_left{
  animation: leftMostLeft 500ms ease;
  @keyframes leftMostLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
}
.translate_end_right{
  animation: rightMostRight 500ms ease;
  @keyframes rightMostRight {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }
} */
</style>
