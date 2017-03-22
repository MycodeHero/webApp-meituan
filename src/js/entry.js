require('../less/init.less');
require('../less/index.less');
var Discount = require('./component/component0-2/Discount.js');
var SlipGoods = require('./component/component0-2/SlipGoods.js');
var Favor = require('./component/component0-2/Favor.js');
var Trait = require('./component/component0-2/Trait.js');
var React = require('react');
var ReactDom = require('react-dom');
var data = [
    {text: '用心早餐', discount: '不止八折', big: true, imgSrc:'./src/img/page0/page0-2/0.png'},
    {text: '天天满减', discount: '优惠想不停', big: false, imgSrc:'./src/img/page0/page0-2/1.png'},
    {text: '披萨专场', discount: '资本主义美食', big: false, imgSrc:'./src/img/page0/page0-2/2.png'},
    {text: '领券中心', discount: '可叠加使用', spe:true, big: false, imgSrc:'./src/img/page0/page0-2/3.png'},
    {text: '超级折扣菜', discount: '劲爆折扣', big: false, imgSrc:'./src/img/page0/page0-2/4.png'}
]

var kind = [
    {title:"初春美味搭", msg:'5折肆意吃', imgSrc:'./src/img/page0/page0-2/13.png'},
    {title:"大额满减", msg:'劲爆8折封顶', imgSrc:'./src/img/page0/page0-2/5.png'},
    {title:"每日上新", msg:'超值5折享', imgSrc:'./src/img/page0/page0-2/10.png'},
    {title:"7折满减", msg:'好店必点', imgSrc:'./src/img/page0/page0-2/11.png'},
    {title:"春日宜吃素", msg:'乐享新生活', imgSrc:'./src/img/page0/page0-2/12.png'},
    {title:"草莓尖货节", msg:'香甜正当时', imgSrc:'./src/img/page0/page0-2/7.png'},
    {title:"柑橘尖货节", msg:'维C不能停', imgSrc:'./src/img/page0/page0-2/8.png'},
    {title:"果切尖货节", msg:'直选现切现卖', imgSrc:'./src/img/page0/page0-2/6.png'},
]

var favor = [
    {title:"风临坊黄焖鸡/鸡公煲", msg:'口味相仿喜欢', imgSrc:'./src/img/page0/page0-2/14.png'},
    {title:"必胜客 (尚都店)", msg:'明星光顾的店', imgSrc:'./src/img/page0/page0-2/15.png'},
    {title:"汉博士汉堡", msg:'口味相仿爱吃', imgSrc:'./src/img/page0/page0-2/16.png'},
    {title:"卡司韩国炸鸡", msg:'口味相仿喜欢', imgSrc:'./src/img/page0/page0-2/17.png'},
    {title:"铭记特色鸡蛋饼炸串", msg:'口味相仿爱吃', imgSrc:'./src/img/page0/page0-2/18.png'},
    {title:"热狗王", msg:'口味相仿爱吃', imgSrc:'./src/img/page0/page0-2/19.png'}
]

var trait = [
    {title:"品牌商家", imgSrc:'./src/img/page0/page0-2/22.png'},
    {title:"精品套餐", imgSrc:'./src/img/page0/page0-2/21.png'},
    {title:"点评高分", imgSrc:'./src/img/page0/page0-2/20.png'}
]
var Module02 = React.createClass({
    render: function(){

        return(
            <div>
                <Discount data={this.props.data}/>
                <SlipGoods data={this.props.kind}/>
                <Favor data={this.props.favor}/>
                <Trait data={this.props.trait}/>
            </div>
        )
    }
})
ReactDom.render(
    <Module02 data={data} kind={kind} favor = {favor} trait={trait}/>,
    document.getElementsByClassName('prefecture')[0]
)
