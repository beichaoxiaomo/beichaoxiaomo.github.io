$.getJSON(API.recommend, (res) => {
    // console.log(res.data);
    renderrecommend(res.data);

})

function renderrecommend(data) {

    for (let i = 0; i < data.length; i += 3) {
        var item = `
                <div class='three_img_box'>
                    <img src="https:${data[i].src}" alt=""/>
                    <img src="https:${data[i + 1].src}" alt=""/>
                    <img src="https:${data[i + 2].src}" alt=""/>
                </div>
        
        `
        $(item).appendTo(".three_img .slider_content")
        var currentIndex = 0;
        // 表示是否正在做动画
        var isAnimate = false;

        /*
         *** 执行轮播核心的逻辑
         *** index：表示接下来哪块要进场
         *** to: 出场的位置
         *** from：进场的位置
         */
        function slider(index, to, from) {
            if (isAnimate) return;
            isAnimate = true;
            // 让当前的内容走开
            $(".three_img .slider_content .three_img_box").eq(currentIndex).animate({ left: to }, 500, function() {});
            // $("#fs .fs_col3 .indicator .dot").eq(currentIndex).removeClass("active");
            // 让下一张内容出来
            $(".three_img .slider_content .three_img_box").eq(index).css({ left: from }).animate({ left: 0 }, 500, function() { isAnimate = false });
            // $("#fs .fs_col3 .indicator .dot").eq(index).addClass("active");
            // 更新 currentIndex
            currentIndex = index;
        }
        // 自动轮播
        var timer = setInterval(next, 5000);
        $(".slider").hover(function() {
            clearInterval(timer);
        }, function() {
            timer = setInterval(next, 5000);
        });
        // 右箭头
        $(" .three_img .slider_arrow > div.right").on("click", next);

        function next() {
            // index 表示下一张是谁
            var index = currentIndex >= $(".three_img .slider_content .three_img_box").length - 1 ? 0 : currentIndex + 1;
            slider(index, -170, 170);
        }
        // 左箭头
        $(".three_img .slider_arrow > div.left").on("click", function() {
            // index 表示下一张是谁
            var index = currentIndex <= 0 ? $(".three_img .slider_content .three_img_box").length - 1 : currentIndex - 1;
            slider(index, 170, -170);
        });
    }
}