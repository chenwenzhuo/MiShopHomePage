// 为满购物车内容弹框设置hover事件，改变top bar中购物车图标的样式
var full_cart_window = $(".top-bar-wrapper .top-bar .right-funcs-logIn .shopping-cart-full .cart-content-full");
var full_cart_top = $(".top-bar-wrapper .top-bar .right-funcs-logIn .shopping-cart-full>a");
full_cart_window.hover(function () {
    full_cart_top.css("background-color", "#ffffff").css("color", "#ee702e");
}, function () {
    full_cart_top.css("background-color", "#ee702e").css("color", "#ffffff");
});
full_cart_top.hover(function () {
    full_cart_top.css("background-color", "#ffffff").css("color", "#ee702e");
}, function () {
    full_cart_top.css("background-color", "#ee702e").css("color", "#ffffff");
});

// 切换top bar的右侧功能区的登录/退出状态
var notLogInFuncs = $(".top-bar-wrapper .top-bar .right-funcs-notLogIn"); //未登录功能区
var logInFuncs = $(".top-bar-wrapper .top-bar .right-funcs-logIn"); //已登录功能区
logInFuncs.hide();
notLogInFuncs.show();
// 登录链接
var login_link = $(".top-bar-wrapper .top-bar .right-funcs-notLogIn .funcs-list-notLogIn li:first-child");
// 退出链接
var quit_link = $(".top-bar-wrapper .top-bar .right-funcs-logIn .funcs-list-logIn li:first-child .user-options li:last-child");
// 点击登录
login_link.on("click", function () {
    notLogInFuncs.hide();
    logInFuncs.show();
});
// 点击退出
quit_link.on("click", function () {
    logInFuncs.hide();
    notLogInFuncs.show();
})



// 为导航栏中导航链接设置hover事件
// 选择需要触发hover事件的元素（前七个链接）
var nav_link = $(".nav-bar-wrapper .nav-bar .nav-links li:lt(7)");
// 选择弹出框
var goodsExampleWrapper = $(".goods-example-wrapper");

// 为导航链接设置hover事件（分为mouseenter和mouseleave两个子事件）
nav_link.hover(function () {
    goodsExampleWrapper.addClass("goods-example-show"); //添加展示样式

}, function () {
    goodsExampleWrapper.removeClass("goods-example-show"); //移除展示样式
});
// 为弹出框设置hover事件
goodsExampleWrapper.hover(function () {
    goodsExampleWrapper.addClass("goods-example-show"); //添加展示样式

}, function () {
    goodsExampleWrapper.removeClass("goods-example-show"); //移除展示样式
});

// 为main banner区导航链接设置hover事件
var m_banner_nav_links = $(".banner-wrapper .banner .main-banner .m-banner-nav-wrapper .m-banner-nav li");
var m_banner_nav_goodslist = $(".banner-wrapper .banner .main-banner .m-banner-nav-wrapper .m-banner-nav-goodslist");
m_banner_nav_links.hover(function () {
    m_banner_nav_goodslist.css("width", "992px");
    m_banner_nav_goodslist.addClass("m-banner-nav-goodslist-show");
}, function () {
    m_banner_nav_goodslist.css("width", "0");
    m_banner_nav_goodslist.removeClass("m-banner-nav-goodslist-show");
});
m_banner_nav_goodslist.hover(function () {
    m_banner_nav_goodslist.css("width", "992px");
    m_banner_nav_goodslist.addClass("m-banner-nav-goodslist-show");
}, function () {
    m_banner_nav_goodslist.css("width", "0");
    m_banner_nav_goodslist.removeClass("m-banner-nav-goodslist-show");
});

// 为banner栏的主图设置定时切换
var banner_main_img = $(".banner-wrapper .banner .main-banner .recomd-goods .recomd-gs-img a img");
var banner_main_img_cnt = 1; //计数器
function switchMainBannerImg() {
    // 根据计数器banner_main_img_cnt的值，切换不同的图片
    switch (banner_main_img_cnt) {
        case 0:
            banner_main_img.attr("src", "./img/mainBanner-RedmiNote11T.jpg");
            setActiveDotSwitcher(1);
            break;
        case 1:
            banner_main_img.attr("src", "./img/mainBanner-RedmiNote11SE.jpg");
            // 切换图片时，同时改变右下方圆点的样式
            setActiveDotSwitcher(2);
            break;
        case 2:
            banner_main_img.attr("src", "./img/mainBanner-Xiaomi618.jpg");
            setActiveDotSwitcher(3);
            break;
        case 3:
            banner_main_img.attr("src", "./img/mainBanner-MijiaSmartPot.jpg");
            setActiveDotSwitcher(4);
            break;
        case 4:
            banner_main_img.attr("src", "./img/mainBanner-RedmiBookPro15.jpg");
            setActiveDotSwitcher(5);
            break;
    }
    banner_main_img_cnt = (banner_main_img_cnt + 1) % 5;
}
var banner_main_img_timer = setInterval(switchMainBannerImg, 3000); //设置定时任务

// 改变主图右下方圆点的样式
function setActiveDotSwitcher(active_dot_cnt) {
    for (var i = 1; i <= 5; i++) {
        if (i == active_dot_cnt) {
            var active_dot = $(".banner-wrapper .banner .main-banner .recomd-goods .dots-switcher a:nth-child(" + i + ") span");
            active_dot.css("background-color", "#ffffff").css("border", "border: 2px solid #686868");
            continue;
        }
        var inactive_dot = $(".banner-wrapper .banner .main-banner .recomd-goods .dots-switcher a:nth-child(" + i + ") span");
        inactive_dot.css("background-color", "#3d3d3d").css("border", "border: 2px solid #8e8e8e");
    }
}

// 为主图右下方圆点设置点击事件
var dots_switcher_1 = $(".banner-wrapper .banner .main-banner .recomd-goods .dots-switcher a:nth-child(1) span");
var dots_switcher_2 = $(".banner-wrapper .banner .main-banner .recomd-goods .dots-switcher a:nth-child(2) span");
var dots_switcher_3 = $(".banner-wrapper .banner .main-banner .recomd-goods .dots-switcher a:nth-child(3) span");
var dots_switcher_4 = $(".banner-wrapper .banner .main-banner .recomd-goods .dots-switcher a:nth-child(4) span");
var dots_switcher_5 = $(".banner-wrapper .banner .main-banner .recomd-goods .dots-switcher a:nth-child(5) span");
dots_switcher_1.on("click", function () {
    clearInterval(banner_main_img_timer); //点击时先取消定时任务

    setActiveDotSwitcher(1); // 点击时改变圆点样式
    // 改变背景图
    banner_main_img.attr("src", "./img/mainBanner-RedmiNote11T.jpg");
    banner_main_img_cnt = 0; //改变计数器的值

    banner_main_img_timer = setInterval(switchMainBannerImg, 3000); //动作完成，重设定时任务
});
dots_switcher_2.on("click", function () {
    clearInterval(banner_main_img_timer); //点击时先取消定时任务

    setActiveDotSwitcher(2); // 点击时改变圆点样式
    // 改变背景图
    banner_main_img.attr("src", "./img/mainBanner-RedmiNote11SE.jpg");
    banner_main_img_cnt = 1 //改变计数器的值

    banner_main_img_timer = setInterval(switchMainBannerImg, 3000); //动作完成，重设定时任务
});
dots_switcher_3.on("click", function () {
    clearInterval(banner_main_img_timer); //点击时先取消定时任务

    setActiveDotSwitcher(3); // 点击时改变圆点样式
    // 改变背景图
    banner_main_img.attr("src", "./img/mainBanner-Xiaomi618.jpg");
    banner_main_img_cnt = 2; //改变计数器的值

    banner_main_img_timer = setInterval(switchMainBannerImg, 3000); //动作完成，重设定时任务
});
dots_switcher_4.on("click", function () {
    clearInterval(banner_main_img_timer); //点击时先取消定时任务

    setActiveDotSwitcher(4); // 点击时改变圆点样式
    // 改变背景图
    banner_main_img.attr("src", "./img/mainBanner-MijiaSmartPot.jpg");
    banner_main_img_cnt = 3; //改变计数器的值

    banner_main_img_timer = setInterval(switchMainBannerImg, 3000); //动作完成，重设定时任务
});
dots_switcher_5.on("click", function () {
    clearInterval(banner_main_img_timer); //点击时先取消定时任务

    setActiveDotSwitcher(5); // 点击时改变圆点样式
    // 改变背景图
    banner_main_img.attr("src", "./img/mainBanner-RedmiBookPro15.jpg");
    banner_main_img_cnt = 4; //改变计数器的值

    banner_main_img_timer = setInterval(switchMainBannerImg, 3000); //动作完成，重设定时任务
});

// 为主图的左右切换按钮设置点击事件
var img_switcher_left = $(".banner-wrapper .banner .main-banner .recomd-goods .img-switcher a:nth-child(1) .switch-left");
var img_switcher_right = $(".banner-wrapper .banner .main-banner .recomd-goods .img-switcher a:nth-child(2) .switch-right");
img_switcher_left.on("click", function () {
    clearInterval(banner_main_img_timer); //点击时先取消定时任务

    // 点击左按钮时，计数器值减1
    banner_main_img_cnt--;
    // 为负数时，重置值为4
    if (banner_main_img_cnt < 0)
        banner_main_img_cnt = 4;
    // 根据计数器当前值，触发圆点切换器的点击事件
    switch (banner_main_img_cnt) {
        case 0:
            dots_switcher_1.trigger("click");
            break;
        case 1:
            dots_switcher_2.trigger("click");
            break;
        case 2:
            dots_switcher_3.trigger("click");
            break;
        case 3:
            dots_switcher_4.trigger("click");
            break;
        case 4:
            dots_switcher_5.trigger("click");
            break;
    }

    clearInterval(banner_main_img_timer); //在圆点的点击事件中启动了定时任务，这里需要将其取消再重设
    banner_main_img_timer = setInterval(switchMainBannerImg, 3000); //动作完成，重设定时任务
});
img_switcher_right.on("click", function () {
    clearInterval(banner_main_img_timer); //点击时先取消定时任务

    // 点击右按钮时，计数器值加1并对5取余
    banner_main_img_cnt = (banner_main_img_cnt + 1) % 5;
    // 根据计数器当前值，触发圆点切换器的点击事件
    switch (banner_main_img_cnt) {
        case 0:
            dots_switcher_1.trigger("click");
            break;
        case 1:
            dots_switcher_2.trigger("click");
            break;
        case 2:
            dots_switcher_3.trigger("click");
            break;
        case 3:
            dots_switcher_4.trigger("click");
            break;
        case 4:
            dots_switcher_5.trigger("click");
            break;
    }

    clearInterval(banner_main_img_timer); //在圆点的点击事件中启动了定时任务，这里需要将其取消再重设
    banner_main_img_timer = setInterval(switchMainBannerImg, 3000); //动作完成，重设定时任务
});


// 商品分类展示区域  智能穿戴区  热门/穿戴 链接hover事件
var smart_wearing_hot = $(".classified-goods-wrapper .classified-goods .smart-wearing-area .sw-top-bar .sw-links a:nth-child(1) span");
var smart_wearing_wear = $(".classified-goods-wrapper .classified-goods .smart-wearing-area .sw-top-bar .sw-links a:nth-child(2) span");
// 默认隐藏八、九、十个
for (var i = 8; i <= 10; i++) {
    var sw_item = $(".classified-goods-wrapper .classified-goods .smart-wearing-area .smart-wearing-list .sw-items li:nth-child(" + i + ")");
    sw_item.hide();
}
smart_wearing_hot.hover(function () {
    // 改变链接文字样式
    smart_wearing_hot.css("color", "#ee702e").css("border-bottom", "2px solid #ee702e");
    smart_wearing_wear.css("color", "#000000").css("border-bottom", "none");
    // “热门”链接hover时，显示列表前七个，隐藏八、九、十个
    for (var i = 1; i <= 7; i++) {
        var sw_item = $(".classified-goods-wrapper .classified-goods .smart-wearing-area .smart-wearing-list .sw-items li:nth-child(" + i + ")");
        sw_item.show();
    }
    for (var i = 8; i <= 10; i++) {
        var sw_item = $(".classified-goods-wrapper .classified-goods .smart-wearing-area .smart-wearing-list .sw-items li:nth-child(" + i + ")");
        sw_item.hide();
    }
});
smart_wearing_wear.hover(function () {
    // 改变链接文字样式
    smart_wearing_hot.css("color", "#000000").css("border-bottom", "none");
    smart_wearing_wear.css("color", "#ee702e").css("border-bottom", "2px solid #ee702e");
    // “热门”链接hover时，隐藏列表前七个，显示八、九、十个
    for (var i = 1; i <= 7; i++) {
        var sw_item = $(".classified-goods-wrapper .classified-goods .smart-wearing-area .smart-wearing-list .sw-items li:nth-child(" + i + ")");
        sw_item.hide();
    }
    for (var i = 8; i <= 10; i++) {
        var sw_item = $(".classified-goods-wrapper .classified-goods .smart-wearing-area .smart-wearing-list .sw-items li:nth-child(" + i + ")");
        sw_item.show();
        // 显示时必须修改margin-left属性
        if (i == 8) {
            sw_item.css("margin-left", "0");
        } else {
            sw_item.css("margin-left", "13px");
        }
    }
});