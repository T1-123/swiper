export function seamless (){
    var content = document.getElementsByClassName("content");
    var list = document.getElementsByClassName("list");
    var swiper = document.getElementsByClassName("swiper");
    var left = document.getElementsByClassName("left");
    var right = document.getElementsByClassName("right");

    var interval = 3000;
    var timer = null;
    var index = 1;

    list[0].style.left = -swiper[index].offsetWidth + 'px';
    
    window.onload = firstStart
    function firstStart(){
        timer=this.setInterval(swiperDeviation,interval);
    }
    function swiperMove(index){
        list[0].style.left = -swiper[index].offsetWidth * index + 'px';
    }
    function swiperDeviation(sign='right'){
        if(sign == 'right'){
            index ++ ;
            if(index >= swiper.length - 1){
                index = swiper.length -1;
                list[0].style.transition = "all linear 1s"
                swiperMove(index);
                setTimeout(function(){
                    index = 1;
                    list[0].style.transition = "";
                    swiperMove(index)
                },1000)
            }else{
                list[0].style.transition = "all linear 1s"
                swiperMove(index)
            }
        }else{
            index -- ;
            if(index <= 0){
                index = 0;
                list[0].style.transition = "all linear 1s"
                swiperMove(index);
                setTimeout(function(){
                    index = swiper.length - 2;
                    list[0].style.transition = "";
                    swiperMove(index)
                },1000)
            }else{
                list[0].style.transition = "all linear 1s"
                swiperMove(index)
            }
        }
    }
    //向左的点击事件
    left[0].addEventListener("click",function(){
        clearTimeout(timer)
        throttle(swiperDeviation,1000,'left')
    })
    
    //向右的点击事件
    right[0].addEventListener("click",function(){
        clearTimeout(timer)
        throttle(swiperDeviation,1000)
    })
    
    //函数节流
    var prev = 0 ;
    function throttle(callback, delay , test) {
        if (typeof callback !== 'function') {
            throw new TypeError('callback is not a function')
        }
        function conduct (){
            const now = Date.now();
            if (now - prev >= delay) {
                if(test != undefined){
                    callback(test);
                }else{
                    callback();
                }
                setTimeout(firstStart,100);//重启定时轮播
                prev = Date.now();
            }
        }
        conduct()
    }
}