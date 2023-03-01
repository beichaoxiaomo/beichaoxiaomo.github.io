$.getJSON('https://floor.jd.com/recommend-v20/discover_goods/get?source=pc-home&pin=&callback=?&_=1652188380638', (res) => {
    // console.log(res.data);

    var value = res.data;
    var htmlstr = '';
    for (let i = 0; i < value.length; i += 2) {
        if (i + 1 > value.length) {
            return false
        }
        htmlstr += `
        <a href="" class="swiper-wrapper wrapper_top ">
            <div class="goods__name">${value[i].recommendTheme}</div>
               <div class="swiper-slide">
                    <img src="https:${value[i].goodsPic}" alt="">
                </div>
         </a>    
         <a href="" class="swiper-wrapper  wrapper_bot">
            <div class="swiper-slide">
                <img src="https:${value[i+1].goodsPic}" alt="">
            </div>
            <div class="goods__name">${value[i+1].recommendTheme}</div>
         </a>    
        `
    }
    $(".J_niceGoods_right .swiper-container").append(htmlstr)

    $(".J_niceGoods_right .swiper-container").width((150 + 30) * value.length * 2)

    // 轮播
    $(".swiper-wrapper").clone().appendTo($(".swiper-container"));

    var width = ($(".swiper-wrapper").width() + 30) * value.length;
    // console.log("asdasdasd", width);
    var flag = 0;
    var timer;

    function hs() {
        clearInterval(timer)
        timer = setInterval(function() {
            flag -= 1;
            if (flag < -width) {
                flag = 0;
            }
            $(".swiper-container").css({
                left: flag
            })
        }, 5)

    }
    hs()
    $(".J_niceGoods_right").hover(function() {
        clearInterval(timer);

    }, function() {
        hs();
    })

})