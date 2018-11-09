const SCROLL_PIC_NUM = 5;
const SCROLL_PIC_WIDTH = 1000;
var scroll = document.getElementById('scroll');
var btnList = document.getElementsByClassName('scroll-btn');
var left = - SCROLL_PIC_WIDTH;

// 轮播图切换函数
function setLeft() {

    scroll.style.left = left + 'px';
}
function mvScroll(mvLeft = false) {

    // 无缝切换
    scroll.style.transition = 'left 0s';
    if (left > - SCROLL_PIC_WIDTH) {

        left = - SCROLL_PIC_NUM * SCROLL_PIC_WIDTH;
    } else if (left < - SCROLL_PIC_NUM * SCROLL_PIC_WIDTH) {

        left = - SCROLL_PIC_WIDTH;
    }
    setLeft(left);
    setTimeout(()=>{
        scroll.style.transition = 'left 0.2s';
        if (mvLeft) {

            left += SCROLL_PIC_WIDTH;
            setLeft(left);
        } else {

            left -= SCROLL_PIC_WIDTH;
            setLeft(left);
        }
        switchBtn(left);
    }, 4);    
}

//按钮切换函数
function switchBtn(left) {
        
    const normalBtnStyle = 'background-color: #cccccc; opacity: 0.5;';
    const activeBtnStyle = 'background-color: aqua; opacity: 0.8;';
    for (let i = 1; i < SCROLL_PIC_NUM + 1; i++) {

        let v = left / -SCROLL_PIC_WIDTH;
        
        if (i != (v<1?v+5:v>5?v-5:v)) {

            btnList[i-1].setAttribute('style', normalBtnStyle);
        } else {

            btnList[i-1].setAttribute('style', activeBtnStyle);
        }
    }
}
switchBtn(left);

window.setInterval(mvScroll, 2000);

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
        left = index * -SCROLL_PIC_WIDTH;
        scroll.style.transition = 'left 0.2s';            
        setLeft(left);
        switchBtn(left);
    })
}

