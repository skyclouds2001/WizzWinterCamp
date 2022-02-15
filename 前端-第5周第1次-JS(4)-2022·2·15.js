// 当前幻灯片页：1-10
let current_page = 1;

// 页面点点击事件
function handlePointClick () {

    const id = parseInt(this.dataset?.id);
    if(!isNaN(id))
        handleSlideshow(id);

    // 更新自动切页
    clearInterval(interval);
    interval = setInterval(handleAutoSlide, UPDATE_TIME);

}

// 前后页切换
function handleSwitchPageClick() {

    if(this.className === 'left')
        handleSlideshow(current_page - 1);
    if(this.className === 'right')
        handleSlideshow(current_page + 1);

    // 更新自动切页
    clearInterval(interval);
    interval = setInterval(handleAutoSlide, UPDATE_TIME);

}

// 根据id切页方法:1-9
function handleSlideshow (id) {

    // 检测输入有效性
    if(id === 0) {
        id = 9;
        document.getElementsByClassName('list')[0].style.transform = `translateX(-5400px)`;
    }

    // 切换图片
    document.getElementsByClassName('list')[0].style.transform = `translateX(${-600 * (id - 1)}px)`;


    // 检测输入有效性
    if(id === 10) {
        id = 1;
        document.getElementsByClassName('list')[0].style.transform = `translateX(0px)`;
    }

    // 切换页面点
    document.querySelectorAll('.points > li').forEach((v, i) => v.className = i === id - 1 ? 'point-active' : '');

    // 更新页面
    current_page = id;

}

// 换页自动切换
let interval = null;
const UPDATE_TIME = 2500000;
function handleAutoSlide () {
    handleSlideshow(current_page + 1);
}

window.onload = function () {

    // 添加页面点点击事件
    document.querySelectorAll('.points > li').forEach(v => v.addEventListener('click', handlePointClick));

    // 添加前后换页事件
    document.getElementsByClassName('left')[0].addEventListener('click', handleSwitchPageClick);
    document.getElementsByClassName('right')[0].addEventListener('click', handleSwitchPageClick);

    // 添加定时轮换功能
    interval = setInterval(handleAutoSlide, UPDATE_TIME);
};
