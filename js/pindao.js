$.getJSON("https://floor.jd.com/recommend-v20/market_bill/get?source=pc_home&except_item_id=9683&pin=&uuid=16319373513692005246727&area=7_412_0_0&callback=?", (res) => {
    // console.log(res.data);
    var value = res.data;
    let htmlStr = ''
    for (var i = 0; i < 2; i++) {
        htmlStr += `
            <div class="channels_item">
                <a href="">

                </a>
                <div class="lazyimg">
                    <img src="https:${value[i].bigImg}" alt="" class="lazyimg_img">
                </div>
            </div>
        `
    }
    for (var i = 2; i < value.length; i++) {
        htmlStr += `
        <div class="channels_item">
            <a href="" class="channels_item_title">
                <span class="channels_item_title_main">${value[i].name}</span>
                <span class="channels_item_title_aside">${value[i].desc}</span>

            </a>
            <a href="" class="channels_item_link">
                <div class="lazyimg">
                    <img src="https://m.360buyimg.com/babel/${value[i].item[0].img}" alt="">
                </div>

            </a>
            <a href="" class="channels_item_link">
                <div class="lazyimg">
                    <img src="https://m.360buyimg.com/babel/${value[i].item[1].img}" alt="">
                </div>

            </a>

        </div>

        `
    }
    $(".channels_block ").append(htmlStr)

})