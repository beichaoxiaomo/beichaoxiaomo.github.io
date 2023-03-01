$.getJSON({
    url: "https://floor.jd.com/recommend-v20/daily_speci_tab/get?source=pc-home&callback=?&_=1652188144283" + Date.now()
}).then((data, textStatus, xhr) => {
    // console.log(data);
    $(" .special_offer .item .head .tab_head").html(data.data.reduce((acc, value, index) => {

        return acc + ` <div class='div_one' >
          
           <a href=""class="tabText" data_index='${index}'> ${value.tabText}</a>

 
        </div>`


    }, ""));
    // 每日特价tab栏切换
    // $(' .div_one>.tabText').mouseover(function() {
    //     console.log(111);
    //     var index = $(this).index();
    //     console.log(index);
    //     $('.special_offer_left .special_list').eq(index).show().siblings().hide();

    // })

}).catch((xhr, textStatus, errorThrown) => {

    console.log("请求失败", errorThrown);
});



$.getJSON({
    url: "https://floor.jd.com/recommend-v20/daily_speci_data/get?source=pc-home&id=2&callback=?&_=1652188144429" + Date.now()
}).then((data, textStatus, xhr) => {
    // console.log(data);
    $(".special_list").html(data.data.reduce((acc, value, index) => {

        return acc + `
        <div class="special_item">
                        <div class="special_item_lowestFirst">${value.lowestPriceDaysInfo}</div>
                        <div class="special_item_img ">
                            <img src="https:${value.imageurl}" alt="">
                        </div>
                        <div class="special_item_message">
                            <span class="special_item_name">${value.wname}</span>
                            <div class="special_item_price">
                                <span class="special_item_miaoShaPrice">
                                    <span class="dollar_txt">$</span> ${value.miaoShaPrice}
                                </span>
                            </div>
                        </div>

                    </div> `

    }, ""));
}).catch((xhr, textStatus, errorThrown) => {

    console.log("请求失败", errorThrown);
})

$.getJSON({
    url: "https://floor.jd.com/recommend-v20/red_new/get?source=pc-home&pin=&callback=?&_=1652188144284" + Date.now()
}).then((data, textStatus, xhr) => {
    // console.log(data);
    $(".goods_others").html(data.data.brandList.reduce((acc, value, index) => {
        // console.log(value);
        return acc + `
                <div class="other-item__logo">
                    <a href="https:${value.jumpUrl}">
                        <img src="https:${value.logoImg}" alt="">
                        <div class="other-item__name">
                        ${value.title}
                        </div>
                    </a>
                </div>
            `

    }, ""));
}).catch((xhr, textStatus, errorThrown) => {

    console.log("请求失败", errorThrown);
});