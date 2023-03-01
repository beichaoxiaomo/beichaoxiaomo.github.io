$(document).on("scroll", function() {
    if ($(this).scrollTop() > 750) {
        $("#elevator").css({
            position: "fixed",
            top: 100,
            right: 80,
        })
    } else {
        $("#elevator").css({
            position: "absolute",
            top: 0,
            right: -80,
        })
    }

    // console.log("1",$(this).scrollTop());
    // console.log("2",$("#J_seckill").offset().top);
    var that = this;
    $("#app .floor").each(function(index, floor) {
        if ($(that).scrollTop() >= $(floor).offset().top - $(window).height() / 2 && $(that).scrollTop() <= $(floor).offset().top - $(window).height() / 2 + $("#J_seckill").height()) {
            $("#elevator ul li a").removeClass("elevator_lk_cur");
            $("." + $(this).data("f")).addClass("elevator_lk_cur");
            if ($(this).data("f") === "f2") {
                $("#elevator ul li a img").attr("src", "https://m.360buyimg.com/babel/jfs/t1/130168/37/28437/9286/62876eb3Ed972a5d7/b60d63729c0710c1.jpg")
            } else {
                $("#elevator ul li a img").attr("src", "https://m.360buyimg.com/babel/jfs/t1/2763/15/17632/8880/62876eb0E8f319672/d0287bcff19a17e3.jpg!q70.jpg")
            }
        }
    });
});

$("#elevator ul li a").on("click", function() {
    // 找距离文档顶部的距离
    // console.log($("#" + $(this).data("id")).offset().top);
    // 找具有定位信息的祖先元素的距离
    // console.log($("#" + $(this).data("id")).get(0).offsetTop);
    if ($(this).data("id")) {
        $(document).scrollTop($("#" + $(this).data("id")).offset().top - $(window).height() / 5);
    }
});