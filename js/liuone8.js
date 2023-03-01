$.getJSON("https://floor.jd.com/recommend-v20/enjoy_beta/get?source=pc-home&pin=&uuid=16529710360581624958043&type=S2&callback=?&_=", (res) => {
    console.log(res.data.act);
    var htmlstr = ''
    for (let i = 0; i < res.data.act.length; i++) {

        htmlstr += `
                <a href="" class="sku-item">
                    <div class="lazyimg">
                        <img src="https://img11.360buyimg.com/img/s380x420_jfs/t1/175008/40/24062/2774/62871bf5E90bce82e/ce484c2ce3c9c8da.png!cc_190x210.webp" alt="">
                    </div>
                    <div class="sku-good">
                        <img src="https://m.360buyimg.com/babel/${res.data.act[i].imgUrl}" alt="">
                    </div>
                    <div class="sku-desc">
                        <div class="lazyimg">
                            <img src="https://img11.360buyimg.com/img/s344x60_jfs/t1/184633/20/25322/3751/6287380eE54718a8e/288c72d11132fb3d.png!cc_190x32.webp" alt="">
                            <span class="sku-desc-text">${res.data.act[i].desc}</span>
                        </div>
                    </div>
                    <span class="sku-title">${res.data.act[i].name}</span>
                </a>

        `
    }
    $(htmlstr).appendTo('.jd_container');

})