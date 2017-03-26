var React = require('react');
var ReactDom = require('react-dom');
var dataRowOne = [
    {text: '美食', page: '1', row: '1', imgSrc:'./src/img/page0/page0-1/nav-list/list1_01.png'},
    {text: '美团超市', page: '1', row: '1', imgSrc:'./src/img/page0/page0-1/nav-list/list1_02.png'},
    {text: '生鲜果蔬', page: '1', row: '1', imgSrc:'./src/img/page0/page0-1/nav-list/list1_03.png'},
    {text: '汉堡炸鸡', page: '1', row: '1', imgSrc:'./src/img/page0/page0-1/nav-list/list1_04.png'}
];
var dataRowTwo = [
    {text: '校园优选', page: '1', row: '1', imgSrc:'./src/img/page0/page0-1/nav-list/list1_05.png'},
    {text: '美团专送', page: '1', row: '1', imgSrc:'./src/img/page0/page0-1/nav-list/list1_06.png'},
    {text: '快食简餐', page: '1', row: '1', imgSrc:'./src/img/page0/page0-1/nav-list/list1_07.png'},
    {text: '暖胃粉面', page: '1', row: '1', imgSrc:'./src/img/page0/page0-1/nav-list/list1_08.png'}
];
var dataRowThree = [
    {text: '小吃馆', page: '1', row: '1', imgSrc:'./src/img/page0/page0-1/nav-list/list2_01.png'},
    {text: '甜点饮品', page: '1', row: '1', imgSrc:'./src/img/page0/page0-1/nav-list/list2_02.png'},
    {text: '家常菜', page: '1', row: '1', imgSrc:'./src/img/page0/page0-1/nav-list/list2_03.png'},
    {text: '鲜花蛋糕', page: '1', row: '1', imgSrc:'./src/img/page0/page0-1/nav-list/list2_04.png'}
];
var dataRowFour = [
    {text: '新商家', page: '1', row: '1', imgSrc:'./src/img/page0/page0-1/nav-list/list2_05.png'},
    {text: '免配送费', page: '1', row: '1', imgSrc:'./src/img/page0/page0-1/nav-list/list2_06.png'},
    {text: '东北馆子', page: '1', row: '1', imgSrc:'./src/img/page0/page0-1/nav-list/list2_07.png'},
    {text: '鸭脖零食', page: '1', row: '1', imgSrc:'./src/img/page0/page0-1/nav-list/list2_08.png'}
];
require('../../../less/less0-1/less0-1.less');
//首页第一个轮播图组件
var FirstSlider = React.createClass({
    render: function () {
        return (  
            <div className={'slider-wrapper'}>
                <ul id={'slider'} className={'slider'}>
                    <li><img src="./src/img/page0/page0-1/slider01.jpg"/></li>
                    <li><img src="./src/img/page0/page0-1/slider02.jpg"/></li>
                    <li><img src="./src/img/page0/page0-1/slider03.jpg"/></li>
                    <li><img src="./src/img/page0/page0-1/slider04.jpg"/></li>
                    <li><img src="./src/img/page0/page0-1/slider01.jpg"/></li>
                </ul>
                <div className={'slider-index'}>
                    <i className={'active'}></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </div>
        )
    }
})

//顶部左侧地址定位
var SearchLeft = React.createClass({
    render: function () {
        return (
            <div className={'searchLeft'}>
                <span className={'address-icon'}></span>
                <span className={'address'}>哈尔滨理工大学...</span>
                <span className={'more'}></span>
            </div>
        )
    }
})
//顶部右侧食物搜索
var SearchRight = React.createClass({
    render: function () {
        return (
            <div className={'searchRight'}>
                <span className={'find'}></span>
                <span className={'goods'}>披萨</span>
            </div>
        )
    }
})
//顶部搜索框
var Search = React.createClass({
    componentDidMount: function(){
        $(window).bind('scroll', function(e){
            var disY = $('.search').offset().top + $('.search').height();
            var posY = $('.slider-wrapper').height() - $('.sliderMask').height();
            if (disY > posY) {
                $('.search').hide();
                $('.searchFixed').show();
            } 
            if (disY < posY) {
                $('.searchFixed').hide();
                $('.search').show();
            }
        });
    },
    render: function () {
        return (
            <div className={'search'}>
                <SearchLeft/>
                <SearchRight/>
            </div>
        )
    }
})
//顶部固定搜索框
var SearchFixed = React.createClass({
    render: function () {
        return (
            <div className={'searchFixed'}>
                <div className={'searchInner'}>
                    <span className={'find'}></span>
                    <span className={'goods'}>披萨</span>
                </div>
            </div>
        )
    }
})
//轮播图下遮罩层
var SliderMask = React.createClass({
    render: function () {
        return (
            <div className={'sliderMask'} style={{background:'url(./src/img/page0/page0-1/mask.png) 0% 0%/ 100% 100%'}}>
            </div>
        )
    }
})
var Header = React.createClass({
    render: function () {
        return (
            <div className={'Header'}>
                <FirstSlider/>
                <SliderMask/>
                <Search/>
                <SearchFixed/>
            </div>
        )
    }
})

//头部分类导航每一行
var NavRow = React.createClass({
    componentWillMount: function(){
        var list = this.props.listItem;
        var rows = [];
        list.forEach(function(ele, index){
            rows.push(
                    <li key={index} className={'list-item'}>
                        <div className={'item-img'} style={{background:'url(' + ele.imgSrc + ') 0% 0%/ 100% 100%'}}></div>
                        <div className={'item-text'}>{ele.text}</div>
                    </li>
            )
        })
        this.rows = rows;
    },
    render: function () {
        return (
            <ul className={'navRow'}>
                {this.rows}
            </ul>
        )
    }
})
// 头部导航列表第一页
var NavOne = React.createClass({
    render: function () {
        return (
            <div className={'navOne'}>
                <NavRow listItem = {dataRowOne}/>
                <NavRow listItem = {dataRowTwo}/>
            </div>
        )
    }
}) 
// 头部导航列表第二页
var NavTwo = React.createClass({
    render: function () {
        return (
            <div className={'navOne'}>
                <NavRow listItem = {dataRowThree}/>
                <NavRow listItem = {dataRowFour}/>
            </div>
        )
    }
})
// 头部导航圆点列表
var Dot = React.createClass({
    render: function () {
        return (
            <div className={'dot'}>
                <i className={'active'}></i>
                <i></i>
            </div>
        )
    }
})
//头部导航列表wrap
var NavWrap = React.createClass({
    render: function () {
        return (
            <div className={'navWrap'}>
                <div id={'nav'} className={'nav'}>
                    <NavOne/>
                    <NavTwo/>
                </div>
                <Dot/>
            </div>
        )
    }
})
var Component01 = React.createClass({
    render: function () {
        return (
            <div className={'wrap-header'}>
                <Header/>
                <NavWrap/>
            </div>
        )
    }
})
ReactDom.render(
    <Component01/>,
    document.getElementsByClassName('wrap-head')[0]
)


var $Nav =  document.getElementById('nav');
var $Dot = $(".dot i");
var screenWidth = $Nav.children[0].offsetWidth;
var startPosition, endPosition, deltaX, deltaY, moveLength;
 $(".navWrap").bind('touchstart', function(e){
            var touch = e.touches[0];
            startPosition = {
                x: touch.pageX,
                y: touch.pageY
            }
        }) .bind('touchmove', function(e){
            var touch = e.touches[0];
            endPosition = {
                x: touch.pageX,
                y: touch.pageY
            };

            deltaX = endPosition.x - startPosition.x;
            deltaY = endPosition.y - startPosition.y;
            moveLength = Math.sqrt(Math.pow(Math.abs(deltaX), 2) + Math.pow(Math.abs(deltaY), 2));
            // console.log(deltaX);

        }).bind('touchend', function(e){
            if(deltaX < 0) { // 向左划动
                // Move(1);
                startMove($Nav, {left: -375}, endJudge);
                $Dot[0].setAttribute('class', '');
                $Dot[1].setAttribute('class', 'active');
            } else if (deltaX > 0) { // 向右划动
                // Move(-1);
                startMove($Nav, {left: 0}, endJudge);
                $Dot[1].setAttribute('class', '');
                $Dot[0].setAttribute('class', 'active');
            }
        });
        function endJudge() {
            console.log("endJudge");
        }


        function startMove (obj, json, func) {
            clearInterval(obj.timer);
            var iSpeed;
            var iCur;
            var name;
            obj.timer = setInterval(function () {
                var bStop = true;
                for (var attr in json) {
                    iCur = parseInt(getStyle(obj, attr));                         
                    iSpeed = (json[attr] - iCur) / 7;
                    if (iSpeed > 0) {
                        iSpeed = Math.ceil(iSpeed);
                    }else {
                        iSpeed = Math.floor(iSpeed);
                    }
                    obj.style[attr] = iCur + iSpeed + 'px';
                    if (Math.floor(Math.abs(json[attr] - iCur)) !== 0) {
                        bStop = false;
                    }
                }
                if (bStop) {
                    clearInterval(obj.timer);
                    // func();
                }
            }, 30);
        } 


        function getStyle (obj, attr) {
            if (obj.currentStyle) {
                return obj.currentStyle[attr];
            }else {
                return window.getComputedStyle(obj,false)[attr];
            }
        }


(function ($) {

    $(window).bind('scroll', function(e){
        var disY = $('.search').offset().top + $('.search').height();
        var posY = $('.slider-wrapper').height() - $('.sliderMask').height();
        if (disY > posY) {
            $('.search').hide();
            $('.searchFixed').show();
        } 
        if (disY < posY) {
            $('.searchFixed').hide();
            $('.search').show();
        }
    });
    
})(window.Zepto);