var scroll = document.getElementById('scroll');
var left = -1000;

// 轮播图切换函数
function mvScroll(mvLeft = false) {

    scroll.style.transition = 'left 0.2s';
    if (mvLeft) {

        left += 1000;
        scroll.style.left = left + 'px';
    } else {

        left -= 1000;
        scroll.style.left = left + 'px';
    }
}

// window.setInterval(mvScroll, 2000);

// 无缝切换
scroll.addEventListener('transitionend', function() {

    if (left >= 0) {
        scroll.style.transition = 'left 0s';
        left = -5000;
    } else if (left <= -6000) {
        scroll.style.transition = 'left 0s';
        left = -1000;
    }
    scroll.style.left = left + 'px';
})

// 滚轮切换
scroll.addEventListener('wheel', function(event) {

    if (event.deltaY > 0) {

        mvScroll();
    } else if (event.deltaY < 0) {

        mvScroll(true);
    }
})
