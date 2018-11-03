var scroll = document.getElementById('scroll');
var btnList = document.getElementsByClassName('scroll-btn');
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

//按钮切换函数
function switchBtn() {
    
    const normalBtnStyle = 'background-color: #cccccc; opacity: 0.5;';
    const ActiveBtnStyle = 'background-color: aqua; opacity: 0.8;';
    for (let i = 1; i < btnList.length+1; i++) {

        if (i != left / -1000) {
            btnList[i-1].setAttribute('style', normalBtnStyle);
        } else {
            btnList[i-1].setAttribute('style', ActiveBtnStyle);
        }
    }
}

// window.setInterval(mvScroll, 2000);

// 无缝切换
scroll.addEventListener('transitionend', function() {
    
    if (left >= 0) {
        scroll.style.transition = 'left 0s';
        left = -5000;
        scroll.style.left = left + 'px';
    } else if (left <= -6000) {
        scroll.style.transition = 'left 0s';
        left = -1000;
        scroll.style.left = left + 'px';
    }
    switchBtn();
})

// 滚轮切换
scroll.addEventListener('wheel', function(event) {

    if (event.deltaY > 0) {

        mvScroll();
    } else if (event.deltaY < 0) {

        mvScroll(true);
    }
})

// 点击按钮切换
for (let i = 0; i < btnList.length; i++) {

    document.getElementById('scroll-btn'+(i+1).toString())
    .addEventListener('click', function(event) {
        
        var index = parseInt(event.target.getAttribute('id').replace('scroll-btn', ''));        
        left = index * -1000;
        scroll.style.transition = 'left 0.2s';            
        scroll.style.left = left + 'px';
    })
}

