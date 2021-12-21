export function stackCard (){
    var content = document.getElementsByClassName("content");
    var list = document.getElementsByClassName("list");
    var swiper = document.getElementsByClassName("swiper");
    var left = document.getElementsByClassName("left");
    var right = document.getElementsByClassName("right");

    var interval = 6000;
    var timer = null;
    var index = 3;
    var scale1 = 0.8;//第一层缩小的比例
    var scale2 = 0.5;//第一层缩小的比例

    list[0].style.left = -swiper[index].offsetWidth * index + 'px';
    
    function initialValue(){//设置左右的层级以及显示的大小
        swiper[index-1].style.transform = `${'scale'+'('+scale1+')'}`
        swiper[index-1].style.marginRight = -swiper[index].offsetWidth/2 + 'px'
        swiper[index-1].style.marginLeft = swiper[index].offsetWidth/2 + 'px'
        swiper[index-1].style.zIndex = -1
        swiper[index-2].style.transform = `${'scale'+'('+scale2+')'}`
        swiper[index-2].style.marginRight = -swiper[index].offsetWidth + 'px'
        swiper[index-2].style.marginLeft = swiper[index].offsetWidth + 'px'
        swiper[index-2].style.zIndex = -2
    
        swiper[index+1].style.transform = `${'scale'+'('+scale1+')'}`
        swiper[index+1].style.marginRight = swiper[index].offsetWidth/2 + 'px'
        swiper[index+1].style.marginLeft = -swiper[index].offsetWidth/2 + 'px'
        swiper[index+1].style.zIndex = -1
        swiper[index+2].style.transform = `${'scale'+'('+scale2+')'}`
        swiper[index+2].style.marginRight = swiper[index].offsetWidth + 'px'
        swiper[index+2].style.marginLeft = -swiper[index].offsetWidth + 'px'
        swiper[index+2].style.zIndex = -2
    }
    
    window.onload = firstStart
    function firstStart(){
        timer = this.setInterval(swiperDeviation,interval);
        initialValue()
    }
    function swiperMove(index){
        list[0].style.left = -swiper[index].offsetWidth * index + 'px';

        if(index > 3 ){
            //恢复第一个
            swiper[index-3].style.marginRight = 0
            swiper[index-3].style.marginLeft = 0
            swiper[index-3].style.zIndex = 1
            swiper[index-3].style.transform = `scale(1)`
        }
        //恢复中间显示的初始值
        swiper[index].style.transform = `scale(1)`
        swiper[index].style.zIndex = 1
        swiper[index].style.marginRight = 0
        swiper[index].style.marginLeft = 0
        ////恢复中间显示的初始值(带放大效果)
        // swiper[index].style.zIndex = 1
        // swiper[index].style.marginRight = 0
        // swiper[index].style.marginLeft = 0
        // //设置放大效果
        // var post = 0;
        // var set = setInterval(frameOne,1);
        // function frameOne(){
        //     if(scale2+post/100 >= 1){//放大到原始比例就停止
        //         clearInterval(set)
        //     }else{
        //         post ++ ;
        //         let d =scale2+post/100
        //         swiper[index].style.transform = `${'scale'+'('+d+')'}`
        //     }
        // }
        
        initialValue()
    }

    function swiperDeviation(sign='right'){
        if(sign == 'right'){
            index ++ ;
            if(index >= swiper.length - 3){
                index = swiper.length -3;
                list[0].style.transition = "all linear 100ms"
                swiperMove(index);
                setTimeout(function(){
                    index = 3;
                    list[0].style.transition = "";
                    swiperMove(index)
                },1000)
            }else{
                list[0].style.transition = "all linear 100ms"
                swiperMove(index)
            }
        }else{
            console.log("左")
            index -- ;
            if(index <= 2){
                index = 2;
                list[0].style.transition = "all linear 500ms"
                swiperMove(index);
                setTimeout(function(){
                    index = swiper.length - 4;
                    list[0].style.transition = "";
                    swiperMove(index)
                },1000)
            }else{
                list[0].style.transition = "all linear 500ms"
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