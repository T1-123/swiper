export function card2_swiper (){
    var content = document.getElementsByClassName("content");
    var list = document.getElementsByClassName("list");
    var swiper = document.getElementsByClassName("swiper");
    var interval = 4000;
    var timer = null;
    var index = 0;
    var right = document.getElementsByClassName("right"); 
    //设置下层图片的偏移距离
    var deviation = swiper[index].offsetWidth/3
    
    list[0].style.left = 0

    window.onload = firstStart
    function firstStart(){
        timer = this.setInterval(swiperDeviation,interval);
    }
    function swiperMove(index){
        list[0].style.left = -swiper[index].offsetWidth * index + 'px';

        if(index == 1){//调整1个
            var post = 0;
            var set = setInterval(frameOne,1);
            function frameOne(){
                if(post >= deviation){
                    clearInterval(set)
                }else{
                    post ++ ;
                    swiper[index-1].style.marginRight = -post + 'px'
                    swiper[index-1].style.marginLeft = post + 'px'
                    swiper[index-1].style.transform = `scale(0.8)`
                }
                
            }
        }else{//调整2个
            var post = 0;
            // var opacityState = 
            var set = setInterval(frameOne,1);
            function frameOne(){
                if(post >= deviation){
                    clearInterval(set)
                }else{
                    post ++ ;
                    swiper[index-1].style.marginRight = -post + 'px'
                    swiper[index-1].style.marginLeft = post + 'px'
                    swiper[index-1].style.transform = `scale(0.8)`

                    // swiper[index-2].style.visibility = `hidden`
                    swiper[index-2].style.opacity = (deviation - post)/100 + '%'
                }
                
            }
        }
    }
    function swiperDeviation(){
        index ++ ;
        if(index >= swiper.length - 1){
            clearInterval(timer)
        }
        list[0].style.transition = "all linear 500ms"
        swiperMove(index)
    }
    //向右的点击事件
    right[0].addEventListener("click",function rightMove(){
        if(index >= swiper.length - 1){
            clearTimeout(timer)
        }else{
            clearTimeout(timer)
            throttle(swiperDeviation,1000)
            
        }
    })
    //函数节流
    var prev = 0 ;
    function throttle(callback, delay) {
        if (typeof callback !== 'function') {
            throw new TypeError('callback is not a function')
        }
        function conduct (){
            const now = Date.now();
            if (now - prev >= delay) {
                callback();
                setTimeout(firstStart,100);//重启定时轮播
                prev = Date.now();
            }
        }
        conduct()
    }
}