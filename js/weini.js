$(function() {


    $(".feed-tab__item").mouseover(function() {
        var index = $(this).index();
        $(".feed-tab__item-title").eq(index).css({
            'color': '#e1251b'
        })
    })
    $(".feed-tab__item").mouseout(function() {

        $(".feed-tab__item-title").css({
            'color': '#333'
        })
    });
    $(".J_feeds .item .grid_c1 ul>li").click(function() {
        $(".J_feeds .item .grid_c1 ul>li").removeClass("active");
        $(this).addClass("active");
    })

})

let page = 0;
let pagesize = 10;
let isloading = false;


function loadFeed() {
    $.getJSON(API.feed, { page, pagesize }, (res) => {
        // console.log(res.data);
        var htmlstr = ''
        if (res.data.length === 0) {
            $("#tip_more").text("没有更多数据了");
            return;
        }
        for (let i = 0; i < res.data.length; i++) {

            htmlstr += `
            <li class="more2_item ">
                    <a href="" class="more2_lk">
                        <div class="lazyimg">
                            <img class='lazy_img' src="https://misc.360buyimg.com/mtd/pc/index_2019/1.0.0/assets/img/2ff7a1a01305c5081d75f15fa6f9b223.gif" alt="" data-lazy='http://img10.360buyimg.com/jdcms/${res.data[i].img}'>
                        </div>
                        <div class="more2_info">
                            <p class=" more2_info_name">
                                
                                ${res.data[i].source == 1 ? ' <i class="more2_info_self">自营</i>':''}
                                ${res.data[i].t}

                            </p>
                            <div class="mod_price">
                                <i>¥</i>
                                <span class="more2_info_price_txt">${res.data[i].jp.substring(0, res.data[i].jp.length - 2)}
                                <span class="more2_info_price_txt-decimal">${res.data[i].jp.substring(res.data[i].jp.length - 2, res.data[i].jp.length)}</span>
                                </span>
                            </div>
                        </div>
                    </a>
             </li>`
        }
        $(htmlstr).appendTo('.more2_list');

        // 把开关再次打开
        isloading = false;
    })
}
loadFeed()
$(window).on('scroll', function() {
    if ($(this).scrollTop() >= document.body.scrollHeight - $(".footer").height() - $(window).height() - 200 &&
        $(this).scrollTop() <= document.body.scrollHeight - $(".footer").height() - $(window).height() - 100
    ) {
        // 没有在请求，那么可以发送请求
        if (!isloading) {
            isloading = true;
            page++;
            // 发送请求
            loadFeed();
        }
    }
    $('.lazy_img').each(function(index, value) {
        if ($(document).scrollTop() >= $(value).offset().top - $(window).height() - 200) {
            $(this).attr("src", $(this).data("lazy")).removeClass("lazy_img");
        } else {
            return false;
        }
    })

})