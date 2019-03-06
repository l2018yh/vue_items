
// scroll
//     $(function () {
//         window.addEventListener('scroll', function () {
//             console.log("移动端可以实现")
//         })
//         console.log($("header").scrollTop());
//         let t = $("header").offset().top;
//         if ($(window.scrollTop()) > t) {
//             $("header").addClass("head");
//         } else {
//             $("header").removeClass("head");
//         }
//     })



//轮播图
$(function () {
    var mySwiper = new Swiper ('.swiper-container1', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay:true,
        pagination: {
            el: '.swiper-pagination',
        },
    })
    var mySwiper = new Swiper ('.swiper-container2', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay:true
    })
    var mySwiper = new Swiper ('.swiper-container3', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay:true
    })
})

//倒计时
// var intDiff = parseInt(500000); //倒计时总秒数量
//
// function timer(intDiff) {
//     window.setInterval(function() {
//         var day = 0,
//             hour = 0,
//             minute = 0,
//             second = 0; //时间默认值
//         if (intDiff > 0) {
//             day = Math.floor(intDiff / (60 * 60 * 24));
//             hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
//             minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
//             second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
//         }
//         if (minute <= 9) minute = '0' + minute;
//         if (second <= 9) second = '0' + second;
//         $('#day_show').html(day + "天");
//         $('#hour_show').html('<s id="h"></s>' + hour + '时');
//         $('#minute_show').html('<s></s>' + minute + '分');
//         $('#second_show').html('<s></s>' + second + '秒');
//         intDiff--;
//     }, 1000);
// }
//
// $(function() {
//     timer(intDiff);
// });


//回到顶部
// $(function () {
//     $(".back_top").css({"display":"none"});
//     console.log($(window).scrollTop())
//     if($(window).scrollTop()>5){
//         $(".back_top").css({"display":"block"});
//         $(".back_top".on("click",function () {
//             $(window.scrollTo(0))
//         })
//     }
// })