export function stackCard2 (){
    var content = document.getElementsByClassName("content");
    var list = document.getElementsByClassName("list");
    var swiper = document.getElementsByClassName("swiper");
    var interval = 6000;
    var timer = null;
    var index = 3;

    var allwidth = swiper[index].offsetWidth
    console.log('width1',allwidth)

    list[0].style.left = -swiper[index].offsetWidth * index + 'px';
    
    window.onload = function(){
        // timer=this.setInterval(swiperDeviation,interval);
    }
    function swiperMove(index){
        console.log('index',index)
        console.log('width2',swiper[index].offsetWidth)
        list[0].style.left = -swiper[index].offsetWidth * index + 'px';
    }
    function swiperDeviation(){
        index ++ ;
        if(index >= swiper.length - 3){
            index = swiper.length -3;
            list[0].style.transition = "all linear 1s"
            swiperMove(index);
            setTimeout(function(){
                console.log()
                index = 3;
                list[0].style.transition = "";
                swiperMove(index)
            },1000)
        }else{
            console.log(index)
            list[0].style.transition = "all linear 1s"
            swiperMove(index)
        }
    }
}