export function swiper (){
    var content = document.getElementsByClassName("content");
    var list = document.getElementsByClassName("list");
    var swiper = document.getElementsByClassName("swiper");
    var interval = 3000;
    var timer = null;
    var index = 0;

    // list[0].style.left = -swiper[index].offsetWidth + 'px';
    list[0].style.left = 0
    
    window.onload = function(){
        timer=this.setInterval(swiperDeviation,interval);
    }
    function swiperMove(index){
        list[0].style.left = -swiper[index].offsetWidth * index + 'px';
    }
    function swiperDeviation(){
        index ++ ;
        if(index >= swiper.length - 1){
            index = swiper.length -1;
            list[0].style.transition = "all linear 1s"
            swiperMove(index);
            setTimeout(function(){
                index = 0;
                list[0].style.transition = "";
                swiperMove(index)
            },4000)
        }else{
            list[0].style.transition = "all linear 1s"
            swiperMove(index)
        }
    }
}