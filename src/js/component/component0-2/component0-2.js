require('../../../less/less0-2/less0-2.less')
var touchMove = require('../../common/touchMove.js')
//引入Title组件
var Title = require('./Title.js')

//引入react的模块依赖
var React = require('react');
var ReactDom = require('react-dom');

//data
var data = [
    {title: '用心早餐', msg: '不止八折', big: true, imgSrc:'./src/img/page0/page0-2/0.png'},
    {title: '天天满减', msg: '优惠想不停', big: false, imgSrc:'./src/img/page0/page0-2/1.png'},
    {title: '披萨专场', msg: '资本主义美食', big: false, imgSrc:'./src/img/page0/page0-2/2.png'},
    {title: '领券中心', msg: '可叠加使用', spe:true, big: false, imgSrc:'./src/img/page0/page0-2/3.png'},
    {title: '超级折扣菜', msg: '劲爆折扣', big: false, imgSrc:'./src/img/page0/page0-2/4.png'}
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

var triat = [
    {title:"品牌商家", imgSrc:'./src/img/page0/page0-2/22.png'},
    {title:"精品套餐", imgSrc:'./src/img/page0/page0-2/21.png'},
    {title:"点评高分", imgSrc:'./src/img/page0/page0-2/20.png'}
]

//创建li事件
function handleMsg(props, name){
     var kind = props;
     var rows = [];
     kind.forEach(function(ele, index){
        rows.push(<li key={index} style={{background:'url(' + ele.imgSrc + ') 0% 0%/100% 100%'}}>
                <div className={name}>
                    <h4>{ele.title}</h4>
                    <p style={(ele.spe)?{background:"#fc3"}:{}}>{ele.msg}</p>
                </div>
        </li>)
    })
    return rows;
}

//引入食物列表组件
var Foodlist = React.createClass({
    render: function(){
        return (
            <div>
                <ul className = {this.props.name}>
                    {this.props.child}
                </ul>
            </div>
        )
    }
})

//打折种类组件
var DiscountItem = React.createClass({
    componentWillMount: function(){
        this.rows = this.props.handleMsg(this.props.kindItem, 'dis-text')
    },
    render: function(){
        return (
            <div style={{display:'flex'}}>
                <div className={'dis-left'}>
                    <Foodlist child = {this.rows.slice(0, 1)}/>
                </div>
                <div className={'dis-right'}>
                    <Foodlist child = {this.rows.slice(1, 3)}/>
                    <Foodlist child = {this.rows.slice(3, 5)}/>
                </div>
            </div>
        )
    }
})

//打折组件
var Discount = React.createClass({
    render: function(){
        return (
            <div className={'discount'}>
                <Title content={"优惠专区"}/>
                <DiscountItem kindItem = {this.props.data} handleMsg = {this.props.handleMsg}/>
            </div>
        )
    }
})


//优惠种类组件
var FavorItem = React.createClass({
    componentWillMount: function(){
        this.rows = this.props.handleMsg(this.props.favor)
    },
    render: function(){
        return (
            <Foodlist child = {this.rows.slice(0, 6)}/>
        )
    }
})


//优选组件
var Favor = React.createClass({
    render: function(){
        return (
            <div className={'favor'}>
                <Title content={"为你优选"}/>
                <FavorItem favor = {this.props.data} handleMsg={this.props.handleMsg}/>
            </div>
        )
    }
})


//滚动组件
var SlipItem = React.createClass({
    componentWillMount: function(){
        this.rows = this.props.handleMsg(this.props.kind)
    },
    render: function(){
        return (
            <Foodlist name = {"kind"} child = {this.rows}/>
        )
    }
})


//横向滚动条
var SlipGoods = React.createClass({
    componentDidMount: function(){
        //引入touchMove事件
       touchMove($('.kind'), 'cross')
    },
    render: function(){
        return (
            <div className={'slipGoods'}>
                <div className={'slip'}>
                    <SlipItem kind={this.props.data} handleMsg={this.props.handleMsg}/>
                </div>
            </div>
        )
    }
})

//品质组件
var TrialItem = React.createClass({
    componentWillMount: function(){
        this.rows = this.props.handleMsg(this.props.trait)
    },
    render: function(){
        return (
            <Foodlist child = {this.rows}/>
        )
    }
})

//品质组件
var Triat = React.createClass({
    render: function(){
        return (
            <div className={'trait'}>
                <Title content={"品质专区"}/>
                <TrialItem trait = {this.props.data} handleMsg={this.props.handleMsg}/>
            </div>
        )
    }
})


var Component02 = React.createClass({
    render: function(){
        return(
            <div>
                <Discount data={data} handleMsg = {handleMsg}/>
                <SlipGoods data={kind} handleMsg = {handleMsg}/>
                <Favor data={favor} handleMsg = {handleMsg}/>
                <Triat data={triat} handleMsg= {handleMsg}/>
            </div>
        )
    }
})


ReactDom.render(
    <Component02 data={data}/>,
    document.getElementsByClassName('prefecture')[0]
)
