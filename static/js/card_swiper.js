export function card_swiper (){
    var content = document.getElementsByClassName("content");
    var list = document.getElementsByClassName("list");
    var swiper = document.getElementsByClassName("swiper");
    var left = document.getElementsByClassName("left");
    var right = document.getElementsByClassName("right");

    var interval = 3000;
    var timer = null;
    var index = 2;//第一张显示的图片位置
    var move = list[0].clientWidth/swiper.length ;//需要位移的宽度、最中间图片的宽

    list[0].style.left = -index * move + 'px';
    
    //最中间图片样式显示
    var heightSize = list[0].clientHeight ;//获取高
    //设置中间样式
    swiper[index].style.width = move + 'px';
    swiper[index].style.height = heightSize + 'px';
    swiper[index].style.margin = 0;
    
    //网页加载完毕后立刻执行的操作
    window.onload = firstStart
    function firstStart(){
        timer = this.setInterval(swiperDeviation,interval);
    }
    function swiperDeviation(sign='right'){
        if(sign == 'right'){
            index ++ ;
            if(index >= swiper.length - 2){
                //避免由于多次点击导致index超出限制的范围
                index = swiper.length -2;
                list[0].style.transition = "all linear 500ms"

                //图片一在倒数第二个显示后,在第二个位置也要保持同样大小做到无缝
                swiper[2].style.width = move + 'px';
                swiper[2].style.height = heightSize + 'px';
                swiper[2].style.margin = 0;

                swiperMove(index);
                setTimeout(function(){
                    index = 2;
                    list[0].style.transition = "";
                    //图片一在倒数第二个显示回到位置二后样式回原
                    swiper[swiper.length -2].style.width = swiper[0].offsetWidth + 'px';
                    swiper[swiper.length -2].style.height = swiper[0].offsetHeight + 'px';
                    swiper[swiper.length -2].style.margin = swiper[0].offsetLeft + 'px';
                    swiperMove(index)
                },1000)
            }else{
                list[0].style.transition = "all linear 500ms"
                swiperMove(index)
            }
        }else{
            index -- ;
            if(index <= 1){
                //避免由于多次点击导致index超出限制的范围
                index = 1;
                list[0].style.transition = "all linear 500ms"
                setTimeout(function(){
                    index = swiper.length - 3;
                    list[0].style.transition = ""
                    list[0].style.left = -move * index + 'px'
                    swiperMove(index,'left');
                    swiper[1].style.width = swiper[0].offsetWidth + 'px';
                    swiper[1].style.height = swiper[0].offsetHeight + 'px';
                    swiper[1].style.margin = swiper[0].offsetLeft + 'px';
                },1000)
            }else{
                list[0].style.transition = "all linear 500ms"
                swiperMove(index,'left')
            }
        }
    }
    //移动位置
    function swiperMove(index,sign = 'right'){
        list[0].style.left = - move * index + 'px';
        //放大缩小动画
        var post = 0;
        var set = setInterval(frame,1);
        function frame(){
            if(post == swiper[0].offsetLeft){
                clearInterval(set)
            }else{
                post ++ ;
                swiper[index].style.width = (move - swiper[0].offsetLeft) + post + 'px';
                swiper[index].style.height = (heightSize - swiper[0].offsetLeft) + post + 'px';
                swiper[index].style.margin = 0;

                if(sign == "right"){
                    //图片一(和最后一个图片)不改变样式所以用它调整,放大之后前面样式回原
                    swiper[index-1].style.width = swiper[0].offsetWidth + 'px';
                    swiper[index-1].style.height = swiper[0].offsetHeight + 'px';
                    swiper[index-1].style.margin = swiper[0].offsetLeft + 'px';
                }else{
                    if(index == swiper.length - 3){
                        //图片4在第一张前面,向左轮播需要把第一张的初始设置给改掉
                        swiper[2].style.width = swiper[0].offsetWidth + 'px';
                        swiper[2].style.height = swiper[0].offsetHeight + 'px';
                        swiper[2].style.margin = swiper[0].offsetLeft + 'px';
                    }
                    swiper[index+1].style.width = swiper[0].offsetWidth + 'px';
                    swiper[index+1].style.height = swiper[0].offsetHeight + 'px';
                    swiper[index+1].style.margin = swiper[0].offsetLeft + 'px';
                }
            }
        }
    }
    //向左的点击事件
    left[0].addEventListener("click",function(){
        clearTimeout(timer)
        throttle(swiperDeviation,1000,'left')
    })
    //向左的点击事件
    // left[0].addEventListener("click",function(){
    //     clearTimeout(timer)
    //     index -- ;
    //     if(index <= 1){
    //         index = 1
    //         list[0].style.transition = "all linear 1s"
    //         swiperMove(index,"left");
    //         setTimeout(function(){
    //             index = swiper.length - 3;

    //             list[0].style.transition = ""
    //             list[0].style.left = -move * index + 'px'
    //             swiperMove(index);
    //             timer = this.setInterval(swiperDeviation,interval);

    //             swiper[1].style.width = swiper[0].offsetWidth + 'px';
    //             swiper[1].style.height = swiper[0].offsetHeight + 'px';
    //             swiper[1].style.margin = swiper[0].offsetLeft + 'px';
    //         },1000)
    //     }else{
    //         swiperMove(index,"left");
    //         setTimeout(function(){
    //             // firstStart()
    //             setInterval(swiperDeviation,interval);
    //         },interval)
    //     }
    // })

    //向右的点击事件
    right[0].addEventListener("click",function rightMove(){
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