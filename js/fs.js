$.getJSON(API.category, (res) => {
    // console.log(res);
    res.data.forEach((cateObj, index) => {
        var $li = $("<li></li>");
        cateObj.s.forEach((cateTxt, index) => {
            $("<a></a>").attr("href", "https:" + cateTxt.n.split("|")[0]).text(cateTxt.n.split("|")[1]).appendTo($li);
            if (index !== cateObj.s.length - 1) {
                $("<span class='cate_line'>/</span>").appendTo($li);
            }
        })
        $popview = $("<div class='popview clearfix'></div>");
        $li.append($popview);

        $cate_part_col1 = $("<div class='cate_part_col1 fl'></div>");
        $popview.append($cate_part_col1);

        $cate_channel = $("<div class='cate_channel'></div>");
        $cate_part_col1.append($cate_channel);


        cateObj.t.forEach((channelTxt, index) => {
            $(`<a>${channelTxt.split("|")[1]}<i class="iconfont icon-youjiantou"></a>`).attr("href", "https:" + channelTxt.split("|")[0]).appendTo($cate_channel);
        })

        $cate_detail = $("<div class='cate_detail'></div>");
        $cate_part_col1.append($cate_detail);
        cateObj.s.forEach((channelTxt, index) => {
            channelTxt.s.forEach((value, index) => {

                // console.log(value.s);
                $dl = $('<dl></dl>');
                $cate_detail.append($dl)
                $dt = $('<dt></dt>');
                $dl.append($dt)
                $dd = $('<dd></dd>');
                $dl.append($dd)
                $(`<a>${value.n.split("|")[1]}<i class="iconfont icon-youjiantou"></a>`).attr("href", "https:" + value.n.split("|")[0]).appendTo($dt);
                value.s.forEach((acc, index) => {
                    // console.log(acc);

                    $(`<a>${acc.n.split("|")[1]}</a>`).attr("href", "https:" + acc.n.split("|")[0]).appendTo($dd);

                })
            })

        });

        $(".item_one ul").append($li);

    })
})
$.getJSON({
    url: "https://floor.jd.com/recommend-v20/news/get?source=pc-home&pin=&uuid=16521726276981158742537&jda=76161171.16521726276981158742537.1652172628.1652172628.1652186013.2&callback=?&_=1652186012799" + Date.now()
}).then((data, textStatus, xhr) => {
    // console.log("请求成功", data);
    // 把数据渲染到页面中
    $(".middle_list").html(data.data.reduce((acc, value) => {
        return acc + ` <li>
            <span class="list_tag"> 
                热门
            </span>
            <span>${value.title}</span>
        </li>`

    }, ""));
}).catch((xhr, textStatus, errorThrown) => {

    console.log("请求失败", errorThrown);
})