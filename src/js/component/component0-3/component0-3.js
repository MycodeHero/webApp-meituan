var React = require('react');
var ReactDom = require('react-dom');
require('../../../less/less0-3/less0-3.less');

// 组件三
var Component3 = React.createClass({
    getInitialState:function () {
        return {
            list:[],
            filter:'id'
        }
    },
    componentWillMount:function () {
        var newList = [];
        this.props.data.forEach(function (ele,index) {
            ele.openFlag=false;
            newList.push(ele);
        });
        this.setState({
            list:newList
        });
    },
    onActivityChange:function (id){
        var list = this.state.list;
        var len = list.length;
        for(var i = len;i --;){
            if(list[i].id == id){
                list[i].openFlag = !list[i].openFlag;
                break;
            }
        }
        this.setState({
            list:list
        })
    },
    onFilterChange:function (type) {
        this.setState({
            filter:type
        })
        var list ;
        if(type == 'proceedPM'){
            console.log('aaa')
            list = this.state.list.sort(function(a,b){
                return b[type] - a[type];
            })
        }else{
            console.log('bbb')
            list = this.state.list.sort(function(a,b) {
                return a[type] - b[type];
            })
        }
        this.setState({
            list:list
        })        
    },
    render:function () {
        return (
            <div className='wrapper'>
                <Nearby/>
                <Filter onFilterChange={this.onFilterChange}/>
                <RestaurantList data={this.state.list} onActivityChange={this.onActivityChange}/>
            </div>
        )
    }
});
//附近商家
var Nearby = React.createClass({
    render:function () {
        return (
            <div className='nearby' >
                <div style={{margin:'0 28%',position:'relative',display:'flex'}}>
                    <div style={{flex:'2' ,borderBottom:'1px solid black',height:'11px'}}></div>
                    <div style={{flex:'5'}}>附近商家</div>
                    <div style={{flex:'2' ,borderBottom:'1px solid black',height:'11px'}}></div>
                </div>
            </div>
        )
    }
});
//过滤条件框
var Filter = React.createClass({
    shouldComponentUpdate:function (nextProps, nextState){
        this.state = nextState;
        return true;
    },
    onHandleChange: function (e){
        var event = e || window.event;
        var target = event.target || event.srcElement;
        var targetId = target.id;
        var ul = document.getElementsByClassName('filter');
        for(var i=0;i<3;i++){
            $(ul[i]).removeClass('changeColor');
            $(target).addClass('changeColor');
        }
        this.props.onFilterChange(targetId);
    },
    render:function () {
        return (
            <ul onClick={this.onHandleChange} className='filter'>
                <li id='id'>综合排序</li>
                <li id='proceedPM'>销量最高</li>
                <li id='distance'>距离最近</li>
                <li id='nothing'>筛选</li>
            </ul>
        )
    }
});
//饭馆表单
var RestaurantList = React.createClass({
    componentWillMount: function () {
        this.onDealData();
    },
    shouldComponentUpdate:function (nextProps, nextState){
        this.state = nextState;
        this.onDealData();
        return true;
    },
    onDealData: function () {
        var data = this.props.data;
        var rows = [];
        var _self = this;
        var onActivityChange = this.props.onActivityChange;
        data.forEach(function (ele,index){
            rows.push(
                <Restaurant data={ele} key={index+3000} onActivityChange={onActivityChange}>
                </Restaurant>
            );
        })
        this.rows = rows;
    },
    render:function () {
        return (
            <div className='List'>
                <ul>
                    {this.rows}
                </ul>
            </div>
        )
    }
})
//单个饭馆
var Restaurant = React.createClass({
    componentWillMount:function () {
        this.onDealData();
    },
    shouldComponentUpdate:function (nextProps, nextState){
        this.state = nextState;
        this.onDealData();
        return true;
    },
    onClickChange:function () {
        this.props.onActivityChange(this.props.data.id);
    },
    onDealData:function () {
        var data = this.props.data.activity;
        var len = data.length;
        var open = this.props.data.openFlag;
        var onActivityClick = len > 2? this.onClickChange: '';
        var row = [];
        data.forEach(function(ele,index){
            if(row.length < 2 || open){
                var url = 'url(./src/img/page0/page0-3' + ele.image + ') no-repeat';
                row.push(
                    <div key={index+1000} onClick={onActivityClick}>
                        <span style={{background:url,backgroundSize:'20px 20px'}}></span>{ele.text}
                    </div>
                )
            }
        })
        this.row = row;
    },
    switchRestMsg: function(){
        $('.store-show').css("left","-25%");
        $('.wrap-header').css("display", "none");
        var wheight = $(window).height();
        var msgHeight = wheight - 189;
        $(document.body).css({'height': wheight, 'overflow':'hidden'})
        $('.store-msg').css({"left": "0%"});
         $('.food-msg').css({"height": msgHeight});
        window.scrollTo(0, 0);
    },
    render:function (){
        var data = this.props.data;
        var starPosition ='0 ' + (-(10 - Math.ceil(data.rate - 0.3))*11) + 'px';
        return (
            <li className='Restaurant'>
                <div className="rest-msg" onClick = {this.switchRestMsg} style={{ width:'100%', display:'inline-block'}}>
                    <img src={'./src/img/page0/page0-3' + data.image}/>
                    <div className='name'>{data.name}</div>
                    <div className='rate'>
                        <span className='star' style={{backgroundPosition:starPosition}}></span>
                        月售{data.proceedPM}
                    </div>
                    <div className='threshold'>起送￥{data.threshold} &nbsp;<span></span>&nbsp; 配送￥{data.transportFee}</div>
                    <div className='distime'>
                        <div>{data.distance}m</div>
                        <div>{data.time}</div>
                    </div>
                </div>
                <div className='activity'>
                    {this.row}
                </div>
            </li>
        )
    }
});

var Data = [
    {
        name:'丽丽快餐  (美团独家)',
        id:1,
        image:'/1.jpg',
        rate:8,
        proceedPM:890,
        distance:789,
        time:'26分钟',
        threshold:13,
        transportFee:2,
        activity:[
            {
                image:'/like.png',
                text:'满15减5;满25减7'
            }
        ]
    },
    {
        name:'加薪饭馆最好吃最好吃最好吃最好吃',
        id:2,
        image:'\/2.jpg',
        rate:7,
        proceedPM:2080,
        distance:908,
        time:'26分钟',
        threshold:9,
        transportFee:0,
        activity:[
            {
                image:'/like.png',
                text:'满15减5;满25减7'
            },
            {
                image:'/like.png',
                text:'新用户立减15元,首次使用银行卡支付最高减20元'
            }
        ]
    },
    {
        name:'兴旺餐馆',
        id:3,
        image:'\/3.jpg',
        rate:5,
        proceedPM:908,
        distance:567,
        time:'45分钟',
        threshold:7,
        transportFee:0,
        activity:[
            {
                image:'/like.png',
                text:'满15减5;满25减7'
            },
            {
                image:'/like.png',
                text:'新用户立减15元,首次使用银行卡支付最高减20元'
            },
            {
                image:'/like.png',
                text:'新用户立减15元,首次使用银行卡支付最高减20元'
            },
            {
                image:'/like.png',
                text:'满15减5;满25减7'
            },
            {
                image:'/like.png',
                text:'满15减5;满25减7'
            }
        ]
    },
    {
        name:'九转小磨',
        id:4,
        image:'\/4.jpg',
        rate:6,
        proceedPM:2346,
        distance:789,
        time:'46分钟',
        threshold:7,
        transportFee:2,
        activity:[
            {
                image:'/like.png',
                text:'满15减5;满25减7'
            }
        ]
    },
    {
        name:'大盘鸡',
        id:5,
        image:'\/5.jpg',
        rate:7.8,
        proceedPM:789,
        distance:234,
        time:'23分钟',
        threshold:12,
        transportFee:0,
        activity:[
            {
                image:'/like.png',
                text:'满15减5;满25减7'
            },
            {
                image:'/like.png',
                text:'新用户立减15元,首次使用银行卡支付最高减20元'
            }
        ]
    },
    {
        name:'天天麻辣烫',
        id:6,
        image:'\/6.jpg',
        rate:9,
        proceedPM:2341,
        distance:890,
        time:'35分钟',
        threshold:'10',
        transportFee:'0',
        activity:[
            {
                image:'/like.png',
                text:'满15减5;满25减7'
            },
            {
                image:'/like.png',
                text:'新用户立减15元,首次使用银行卡支付最高减20元'
            },
            {
                image:'/like.png',
                text:'满15减5;满25减7'
            },
            {
                image:'/like.png',
                text:'新用户立减15元,首次使用银行卡支付最高减20元'
            }
        ]
    },
    {
        name:'东北炖菜香',
        id:7,
        image:'\/7.jpg',
        rate:4,
        proceedPM:790,
        distance:237,
        time:'13分钟',
        threshold:'10',
        transportFee:'0',
        activity:[
            {
                image:'/like.png',
                text:'满15减5;满25减7'
            }
        ]
    },
    {
        name:'重庆小面',
        id:8,
        image:'\/8.jpg',
        rate:8.6,
        proceedPM:1000,
        distance:300,
        time:'20分钟',
        threshold:'10',
        transportFee:'0',
        activity:[
            {
                image:'/like.png',
                text:'满15减5;满25减7'
            },
            {
                image:'/like.png',
                text:'新用户立减15元,首次使用银行卡支付最高减20元'
            }
        ]
    },
    {
        name:'千纸鹤烤肉',
        id:9,
        image:'\/9.jpg',
        rate:6,
        proceedPM:1908,
        distance:908,
        time:'46分钟',
        threshold:'10',
        transportFee:'0',
        activity:[
            {
                image:'/like.png',
                text:'满15减5;满25减7'
            }
        ]
    },
    {
        name:'小木屋',
        id:10,
        image:'\/10.jpg',
        rate:9.4,
        proceedPM:3029,
        distance:890,
        time:'40分钟',
        threshold:'10',
        transportFee:'0',
        activity:[
            {
                image:'/like.png',
                text:'满15减5;满25减7'
            },
            {
                image:'/like.png',
                text:'满15减5;满25减7'
            },
            {
                image:'/like.png',
                text:'新用户立减15元,首次使用银行卡支付最高减20元'
            }
        ]
    }
];

ReactDom.render(
    <Component3 data={Data}/>,
    document.getElementsByClassName('restaurant')[0]
)

