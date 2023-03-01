 // 寻宝tab栏
 $(function() {
     // 1.鼠标经过左侧的小li
     $('.tab_head_item .top_tab_lk').mouseover(function() {

         var index = $(this).index();
         console.log(index);
         $('.tab_body .tab_body_item').eq(index).show().siblings().hide();
         $(this).css({
             'backgroundColor': '#e1251b',
             'color': ' #fff'
         }).siblings().css({
             'backgroundColor': '#f6f6f6',
             'color': ' #999 '
         })


     })
 });
 // 秒杀轮播图
 (function() { // 表示当前轮播到第几张内容了

     var currentIndex = 0; // 表示是否正在做动画

     var isAnimate = false;

     function slider(index, to, from) {
         if (isAnimate) return;
         isAnimate = true; // 让当前的内容走开

         $("#app .J_spec .slider_list .seckill_slider ").eq(currentIndex).animate({
             left: to
         }, 500, function() {});
         $("#app .J_spec .slider_list .indicator .dot").eq(currentIndex).removeClass("active"); // 让下一张内容出来

         $("#app .J_spec .slider_list .seckill_slider ").eq(index).css({
             left: from
         }).animate({
             left: 0
         }, 500, function() {
             isAnimate = false
         });
         $("#app .J_spec .slider_list .dot").eq(index).addClass("active"); // 更新 currentIndex

         currentIndex = index;
     } // 自动轮播

     var timer = setInterval(next, 3000);
     $("#app .J_spec .slider_list").hover(function() {
         clearInterval(timer);
     }, function() {
         timer = setInterval(next, 3000);
     }); // 右箭头

     $("#app .J_spec .slider_list .slider_arrow > div.right").on("click", next);

     function next() { // index 表示下一张是谁

         var index = currentIndex >= $("#app .J_spec .slider_list .seckill_slider ").length - 1 ? 0 : currentIndex + 1;
         slider(index, -810, 810);
     } // 左箭头

     $("#app .J_spec .slider_list .slider_arrow > div.left").on("click", function() { // index 表示下一张是谁

         var index = currentIndex <= 0 ? $("#app .J_spec .slider_list .seckill_slider ").length - 1 : currentIndex - 1;
         slider(index, 810, -810);
     });
 })();
 $(function() {
     $('#pull_down').hover(function() {
         $(this).children('.down_box').show()
         $(this).css({
             "background": "white",
         })
         $(this).children('a').css({
             "color": "red",
         })
     }, function() {
         $(this).children('.down_box').hide()
         $(this).css({
             "background": "none",
         })
         $(this).children('a').css({
             "color": "#999",
         });

     });
     $('.pull_down_one').hover(function() {
         $(this).children('.down_box_one').show()
         $(this).css({
             "background": "white",
         })
         $(this).children('a').css({
             "color": "red",
         })
     }, function() {
         $(this).children('.down_box_one').hide()
         $(this).css({
             "background": "none",
         })
         $(this).children('a').css({
             "color": "#999",
         });

     });
     var one = $(".down_box").children('ul').children('li').children('a');
     // console.log(one);
     $('one').click(function() {
         $(this).css('background', 'pink')
         $(this).siblings('button').css('background', '')
     });

     $.getJSON({
         url: "https://floor.jd.com/user-v20/hotwords/get?source=pc-home&pin=&uuid=16521726276981158742537&callback=?&_=1652186012791" + Date.now()
     }).then((data, textStatus, xhr) => {
         // console.log("请求成功", data);
         // 把数据渲染到页面中
         $(".hotwords").html(data.data.reduce((acc, item) => {
             if (Array.isArray(item)) {
                 return acc + `<a href="${item[0].u}">${item[0].n}</a>`
             } else {
                 return acc + `<a href="${item.u}">${item.n}</a>`
             }
         }, ""));
     }).catch((xhr, textStatus, errorThrown) => {

         console.log("请求失败", errorThrown);
     })
 });



 // 京东秒杀
 var date1 = new Date()
 var time = +new Date();;
 var timmer_hour = document.querySelector('.timmer_hour')
 var timmer_minute = document.querySelector('.timmer_minute')
 var timmer_second = document.querySelector('.timmer_second')

 setInterval(function() {
     date1 = new Date()
     time = new Date('2022-5-27 00:00:00');

     var date2 = (time - date1) / 1000;
     // console.log(date2);
     var t = parseInt(date2 / 60 / 60 / 24)
         // console.log(t);
     var h = parseInt(date2 / 60 / 60 % 24)
         // console.log(h);
     var m = parseInt(date2 / 60 % 60)
         // console.log(m);
     var s = parseInt(date2 % 60)
         // console.log(s);
     timmer_hour.innerHTML = h;
     timmer_minute.innerHTML = m;
     timmer_second.innerHTML = s;
 }, 1000)