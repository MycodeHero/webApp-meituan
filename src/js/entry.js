require('../less/init.less');
require('../less/index.less');
import $ from 'n-zepto'
var Discount = require('./component/component0-2/Discount.js');
var React = require('react');
var ReactDom = require('react-dom');
var data = [
    {text: '用心早餐', discount: '不止八折', big: true, imgSrc:'./src/img/page0/page0-2/0.png'},
    {text: '天天满减', discount: '优惠想不停', big: false, imgSrc:'./src/img/page0/page0-2/1.png'},
    {text: '披萨专场', discount: '资本主义美食', big: false, imgSrc:'./src/img/page0/page0-2/2.png'},
    {text: '领券中心', discount: '可叠加使用', spe:true, big: false, imgSrc:'./src/img/page0/page0-2/3.png'},
    {text: '超级折扣菜', discount: '劲爆折扣', big: false, imgSrc:'./src/img/page0/page0-2/4.png'}
]

ReactDom.render(
    <Discount data={data}/>,
    document.getElementsByClassName('prefecture')[0]
)