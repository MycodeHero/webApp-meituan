var React = require('react');
var ReactDom = require('react-dom');
<<<<<<< HEAD
require('../../../less/less1-1/less1-1.less')

var data = [{
				 "热销":[],
				 "折扣":[], 
				 "拌饭系列":[], 
				 "盖浇饭系列":[], 
				 "三生三世新品套餐":[], 
				 "精选套餐":[],
				 "炸串系列":[],
				 "点单系列":[],
				 "小菜系列":[],
				 "饮品":[]
			}]
var Kind = React.createClass({
=======
var touchMove = require('../../common/touchMove.js')
require('../../../less/less1-1/less1-1.less')

var data = [{
				 "热销":[
				 	{"img": "./src/img/page1/page1-1/1.jpg","name": "照烧烤肉拌饭", "msg": "烤肉拌饭加上香浓的照烧酱,吃上去美美哒!", "month": 353, "like": 78, "price": 16},
				 	{"img": "./src/img/page1/page1-1/1.jpg","name": "哇咔咔鸡盘饭", "msg": "提供2款小菜和喷喷香的鸡排，酱料为秘制甜辣酱.", "month": 268, "like": 21, "price": 16},
					{"img": "./src/img/page1/page1-1/1.jpg","name": "烤肉鸡排双拼饭", "msg": "2款小菜，烤肉和鸡排双拼，酱料为秘制辣酱", "month": 139, "like": 13, "price":16},
					{"img": "./src/img/page1/page1-1/1.jpg","name": "煎蛋", "msg": "", "month": 113, "like": 32, "price": 2},
					{"img": "./src/img/page1/page1-1/1.jpg","name": "炸鱼丸", "msg": "", "month": 85, "like": 24,"price": 2},
					{"img": "./src/img/page1/page1-1/1.jpg","name": "250ml饮料随机1款", "msg": "250ml饮料随机搭配", "month": 82, "like": 3, "price": 0.1, "discount": '新用户专享0.33折 每单限1份'},
					{"img": "./src/img/page1/page1-1/1.jpg","name": "沙拉烤肉拌饭", "msg": "三款特色小菜和烤肉，拌饭为沙拉酱!", "month": 61, "like": 19, "price": 16},
					{"img": "./src/img/page1/page1-1/1.jpg","name": "洋葱鸡肉圈饭+鸡排+250ml饮料", "msg": "洋葱鸡肉圈饭(搭配2款小菜)+炸鸡排1个+随机搭配250ml饮料美味可口", "month": 52, "like": 2, "price": 27},
					{"img": "./src/img/page1/page1-1/1.jpg","name": "豆皮肉卷拌饭+香嫩鸡排+250ml小饮料", "msg": "豆皮肉卷+精选小菜+米饭+香嫩鸡排+250ml饮料", "month": 45, "like": 2, "price": 30},

				 ],
				 "折扣":[
				 	{"name": "250ml饮料随机1款", "msg": "250ml饮料随机搭配", "month": 82, "like": 3, "price": 0.1, "cost": "3", "discount": '新用户专享0.33折 每单限1份'},
					{"name": "全肉烤肉拌饭+维他柠檬茶套餐", "msg":"足量的烤肉+米饭+维他柠檬茶", "month": 35, "like": 1, "price": 19.9, "cost": "25", "discount": '7.96折 每单限1份'},
					{"name": "爆酱鸡排拌饭+维他柠檬茶套餐", "msg": "爆酱鸡排+精选特色小菜+米饭+维他柠檬茶", "month": 15, "like": 1, "price": 19.9, "cost": "25", "discount": '7.96折 每单限1份'}
				 ], 
				 "拌饭系列":[
				 	{"name": "照烧烤肉拌饭", "msg": "烤肉拌饭加上香浓的照烧酱,吃上去美美哒!", "month": 353, "like": 78, "price": 16},
				 	{"name": "哇咔咔鸡盘饭", "msg": "提供2款小菜和喷喷香的鸡排，酱料为秘制甜辣酱.", "month": 268, "like": 21, "price": 16},
					{"name": "烤肉鸡排双拼饭", "msg": "2款小菜，烤肉和鸡排双拼，酱料为秘制辣酱", "month": 139, "like": 13, "price":16},
					{"name": "煎蛋", "msg": "", "month": 113, "like": 32, "price": 2},
					{"name": "炸鱼丸", "msg": "", "month": 85, "like": 24,"price": 2},
					{"name": "250ml饮料随机1款", "msg": "250ml饮料随机搭配", "month": 82, "like": 3, "price": 0.1, "discount": '新用户专享0.33折 每单限1份'},
					{"name": "沙拉烤肉拌饭", "msg": "三款特色小菜和烤肉，拌饭为沙拉酱!", "month": 61, "like": 19, "price": 16},
					{"name": "洋葱鸡肉圈饭+鸡排+250ml饮料", "msg": "洋葱鸡肉圈饭(搭配2款小菜)+炸鸡排1个+随机搭配250ml饮料美味可口", "month": 52, "like": 2, "price": 27},
					{"name": "豆皮肉卷拌饭+香嫩鸡排+250ml小饮料", "msg": "豆皮肉卷+精选小菜+米饭+香嫩鸡排+250ml饮料", "month": 45, "like": 2, "price": 30},
				 ], 
				 "盖浇饭系列":[
				 	{"name": "照烧烤肉拌饭", "msg": "烤肉拌饭加上香浓的照烧酱,吃上去美美哒!", "month": 353, "like": 78, "price": 16},
				 	{"name": "哇咔咔鸡盘饭", "msg": "提供2款小菜和喷喷香的鸡排，酱料为秘制甜辣酱.", "month": 268, "like": 21, "price": 16},
					{"name": "烤肉鸡排双拼饭", "msg": "2款小菜，烤肉和鸡排双拼，酱料为秘制辣酱", "month": 139, "like": 13, "price":16},
					{"name": "煎蛋", "msg": "", "month": 113, "like": 32, "price": 2},
					{"name": "炸鱼丸", "msg": "", "month": 85, "like": 24,"price": 2},
					{"name": "250ml饮料随机1款", "msg": "250ml饮料随机搭配", "month": 82, "like": 3, "price": 0.1, "discount": '新用户专享0.33折 每单限1份'},
					{"name": "沙拉烤肉拌饭", "msg": "三款特色小菜和烤肉，拌饭为沙拉酱!", "month": 61, "like": 19, "price": 16},
					{"name": "洋葱鸡肉圈饭+鸡排+250ml饮料", "msg": "洋葱鸡肉圈饭(搭配2款小菜)+炸鸡排1个+随机搭配250ml饮料美味可口", "month": 52, "like": 2, "price": 27},
					{"name": "豆皮肉卷拌饭+香嫩鸡排+250ml小饮料", "msg": "豆皮肉卷+精选小菜+米饭+香嫩鸡排+250ml饮料", "month": 45, "like": 2, "price": 30},
				 ], 
				 "三生三世新品套餐":[
				 	{"name": "照烧烤肉拌饭", "msg": "烤肉拌饭加上香浓的照烧酱,吃上去美美哒!", "month": 353, "like": 78, "price": 16},
				 	{"name": "哇咔咔鸡盘饭", "msg": "提供2款小菜和喷喷香的鸡排，酱料为秘制甜辣酱.", "month": 268, "like": 21, "price": 16},
					{"name": "烤肉鸡排双拼饭", "msg": "2款小菜，烤肉和鸡排双拼，酱料为秘制辣酱", "month": 139, "like": 13, "price":16},
					{"name": "煎蛋", "msg": "", "month": 113, "like": 32, "price": 2},
					{"name": "炸鱼丸", "msg": "", "month": 85, "like": 24,"price": 2},
					{"name": "250ml饮料随机1款", "msg": "250ml饮料随机搭配", "month": 82, "like": 3, "price": 0.1, "discount": '新用户专享0.33折 每单限1份'},
					{"name": "沙拉烤肉拌饭", "msg": "三款特色小菜和烤肉，拌饭为沙拉酱!", "month": 61, "like": 19, "price": 16},
					{"name": "洋葱鸡肉圈饭+鸡排+250ml饮料", "msg": "洋葱鸡肉圈饭(搭配2款小菜)+炸鸡排1个+随机搭配250ml饮料美味可口", "month": 52, "like": 2, "price": 27},
					{"name": "豆皮肉卷拌饭+香嫩鸡排+250ml小饮料", "msg": "豆皮肉卷+精选小菜+米饭+香嫩鸡排+250ml饮料", "month": 45, "like": 2, "price": 30},
				 ], 
				 "精选套餐":[
				 	{"name": "照烧烤肉拌饭", "msg": "烤肉拌饭加上香浓的照烧酱,吃上去美美哒!", "month": 353, "like": 78, "price": 16},
				 	{"name": "哇咔咔鸡盘饭", "msg": "提供2款小菜和喷喷香的鸡排，酱料为秘制甜辣酱.", "month": 268, "like": 21, "price": 16},
					{"name": "烤肉鸡排双拼饭", "msg": "2款小菜，烤肉和鸡排双拼，酱料为秘制辣酱", "month": 139, "like": 13, "price":16},
					{"name": "煎蛋", "msg": "", "month": 113, "like": 32, "price": 2},
					{"name": "炸鱼丸", "msg": "", "month": 85, "like": 24,"price": 2},
					{"name": "250ml饮料随机1款", "msg": "250ml饮料随机搭配", "month": 82, "like": 3, "price": 0.1, "discount": '新用户专享0.33折 每单限1份'},
					{"name": "沙拉烤肉拌饭", "msg": "三款特色小菜和烤肉，拌饭为沙拉酱!", "month": 61, "like": 19, "price": 16},
					{"name": "洋葱鸡肉圈饭+鸡排+250ml饮料", "msg": "洋葱鸡肉圈饭(搭配2款小菜)+炸鸡排1个+随机搭配250ml饮料美味可口", "month": 52, "like": 2, "price": 27},
					{"name": "豆皮肉卷拌饭+香嫩鸡排+250ml小饮料", "msg": "豆皮肉卷+精选小菜+米饭+香嫩鸡排+250ml饮料", "month": 45, "like": 2, "price": 30},
				 ],
				 "炸串系列":[
				 	{"name": "照烧烤肉拌饭", "msg": "烤肉拌饭加上香浓的照烧酱,吃上去美美哒!", "month": 353, "like": 78, "price": 16},
				 	{"name": "哇咔咔鸡盘饭", "msg": "提供2款小菜和喷喷香的鸡排，酱料为秘制甜辣酱.", "month": 268, "like": 21, "price": 16},
					{"name": "烤肉鸡排双拼饭", "msg": "2款小菜，烤肉和鸡排双拼，酱料为秘制辣酱", "month": 139, "like": 13, "price":16},
					{"name": "煎蛋", "msg": "", "month": 113, "like": 32, "price": 2},
					{"name": "炸鱼丸", "msg": "", "month": 85, "like": 24,"price": 2},
					{"name": "250ml饮料随机1款", "msg": "250ml饮料随机搭配", "month": 82, "like": 3, "price": 0.1, "discount": '新用户专享0.33折 每单限1份'},
					{"name": "沙拉烤肉拌饭", "msg": "三款特色小菜和烤肉，拌饭为沙拉酱!", "month": 61, "like": 19, "price": 16},
					{"name": "洋葱鸡肉圈饭+鸡排+250ml饮料", "msg": "洋葱鸡肉圈饭(搭配2款小菜)+炸鸡排1个+随机搭配250ml饮料美味可口", "month": 52, "like": 2, "price": 27},
					{"name": "豆皮肉卷拌饭+香嫩鸡排+250ml小饮料", "msg": "豆皮肉卷+精选小菜+米饭+香嫩鸡排+250ml饮料", "month": 45, "like": 2, "price": 30},
				 ],
				 "点单系列":[
				 	{"name": "照烧烤肉拌饭", "msg": "烤肉拌饭加上香浓的照烧酱,吃上去美美哒!", "month": 353, "like": 78, "price": 16},
				 	{"name": "哇咔咔鸡盘饭", "msg": "提供2款小菜和喷喷香的鸡排，酱料为秘制甜辣酱.", "month": 268, "like": 21, "price": 16},
					{"name": "烤肉鸡排双拼饭", "msg": "2款小菜，烤肉和鸡排双拼，酱料为秘制辣酱", "month": 139, "like": 13, "price":16},
					{"name": "煎蛋", "msg": "", "month": 113, "like": 32, "price": 2},
					{"name": "炸鱼丸", "msg": "", "month": 85, "like": 24,"price": 2},
					{"name": "250ml饮料随机1款", "msg": "250ml饮料随机搭配", "month": 82, "like": 3, "price": 0.1, "discount": '新用户专享0.33折 每单限1份'},
					{"name": "沙拉烤肉拌饭", "msg": "三款特色小菜和烤肉，拌饭为沙拉酱!", "month": 61, "like": 19, "price": 16},
					{"name": "洋葱鸡肉圈饭+鸡排+250ml饮料", "msg": "洋葱鸡肉圈饭(搭配2款小菜)+炸鸡排1个+随机搭配250ml饮料美味可口", "month": 52, "like": 2, "price": 27},
					{"name": "豆皮肉卷拌饭+香嫩鸡排+250ml小饮料", "msg": "豆皮肉卷+精选小菜+米饭+香嫩鸡排+250ml饮料", "month": 45, "like": 2, "price": 30},
				 ],
				 "小菜系列":[
				 	{"name": "照烧烤肉拌饭", "msg": "烤肉拌饭加上香浓的照烧酱,吃上去美美哒!", "month": 353, "like": 78, "price": 16},
				 	{"name": "哇咔咔鸡盘饭", "msg": "提供2款小菜和喷喷香的鸡排，酱料为秘制甜辣酱.", "month": 268, "like": 21, "price": 16},
					{"name": "烤肉鸡排双拼饭", "msg": "2款小菜，烤肉和鸡排双拼，酱料为秘制辣酱", "month": 139, "like": 13, "price":16},
					{"name": "煎蛋", "msg": "", "month": 113, "like": 32, "price": 2},
					{"name": "炸鱼丸", "msg": "", "month": 85, "like": 24,"price": 2},
					{"name": "250ml饮料随机1款", "msg": "250ml饮料随机搭配", "month": 82, "like": 3, "price": 0.1, "discount": '新用户专享0.33折 每单限1份'},
					{"name": "沙拉烤肉拌饭", "msg": "三款特色小菜和烤肉，拌饭为沙拉酱!", "month": 61, "like": 19, "price": 16},
					{"name": "洋葱鸡肉圈饭+鸡排+250ml饮料", "msg": "洋葱鸡肉圈饭(搭配2款小菜)+炸鸡排1个+随机搭配250ml饮料美味可口", "month": 52, "like": 2, "price": 27},
					{"name": "豆皮肉卷拌饭+香嫩鸡排+250ml小饮料", "msg": "豆皮肉卷+精选小菜+米饭+香嫩鸡排+250ml饮料", "month": 45, "like": 2, "price": 30},
				 ],
				 "饮品":[
				 	{"name": "照烧烤肉拌饭", "msg": "烤肉拌饭加上香浓的照烧酱,吃上去美美哒!", "month": 353, "like": 78, "price": 16},
				 	{"name": "哇咔咔鸡盘饭", "msg": "提供2款小菜和喷喷香的鸡排，酱料为秘制甜辣酱.", "month": 268, "like": 21, "price": 16},
					{"name": "烤肉鸡排双拼饭", "msg": "2款小菜，烤肉和鸡排双拼，酱料为秘制辣酱", "month": 139, "like": 13, "price":16},
					{"name": "煎蛋", "msg": "", "month": 113, "like": 32, "price": 2},
					{"name": "炸鱼丸", "msg": "", "month": 85, "like": 24,"price": 2},
					{"name": "250ml饮料随机1款", "msg": "250ml饮料随机搭配", "month": 82, "like": 3, "price": 0.1, "discount": '新用户专享0.33折 每单限1份'},
					{"name": "沙拉烤肉拌饭", "msg": "三款特色小菜和烤肉，拌饭为沙拉酱!", "month": 61, "like": 19, "price": 16},
					{"name": "洋葱鸡肉圈饭+鸡排+250ml饮料", "msg": "洋葱鸡肉圈饭(搭配2款小菜)+炸鸡排1个+随机搭配250ml饮料美味可口", "month": 52, "like": 2, "price": 27},
					{"name": "豆皮肉卷拌饭+香嫩鸡排+250ml小饮料", "msg": "豆皮肉卷+精选小菜+米饭+香嫩鸡排+250ml饮料", "month": 45, "like": 2, "price": 30},
				 ],
				 "活动专享":[
				 	{"name": "照烧烤肉拌饭", "msg": "烤肉拌饭加上香浓的照烧酱,吃上去美美哒!", "month": 353, "like": 78, "price": 16},
				 	{"name": "哇咔咔鸡盘饭", "msg": "提供2款小菜和喷喷香的鸡排，酱料为秘制甜辣酱.", "month": 268, "like": 21, "price": 16},
					{"name": "烤肉鸡排双拼饭", "msg": "2款小菜，烤肉和鸡排双拼，酱料为秘制辣酱", "month": 139, "like": 13, "price":16},
					{"name": "煎蛋", "msg": "", "month": 113, "like": 32, "price": 2},
					{"name": "炸鱼丸", "msg": "", "month": 85, "like": 24,"price": 2},
					{"name": "250ml饮料随机1款", "msg": "250ml饮料随机搭配", "month": 82, "like": 3, "price": 0.1, "discount": '新用户专享0.33折 每单限1份'},
					{"name": "沙拉烤肉拌饭", "msg": "三款特色小菜和烤肉，拌饭为沙拉酱!", "month": 61, "like": 19, "price": 16},
					{"name": "洋葱鸡肉圈饭+鸡排+250ml饮料", "msg": "洋葱鸡肉圈饭(搭配2款小菜)+炸鸡排1个+随机搭配250ml饮料美味可口", "month": 52, "like": 2, "price": 27},
					{"name": "豆皮肉卷拌饭+香嫩鸡排+250ml小饮料", "msg": "豆皮肉卷+精选小菜+米饭+香嫩鸡排+250ml饮料", "month": 45, "like": 2, "price": 30},
				 ]
			}]


var KindList = React.createClass({
>>>>>>> dev
	componentWillMount: function(){
		var kindItem = this.props.data[0];
		var item = [];
		var count = 0;
		for(var props in kindItem){
<<<<<<< HEAD
			item.push(<li key = {count++}>{props}</li>)
		}
		this.item = item;
	},
=======
			item.push(<li key = {count++}><p>{props}</p></li>)
		}
		this.item = item;
	},
	componentDidMount: function(){
		touchMove($('.item'), 'up', 0.1)
	},
>>>>>>> dev
	render: function(){
		return (
			<div className="kind-list">
				<ul className="item">
					{this.item}
				</ul>
			</div>
		)
	}
})

<<<<<<< HEAD
var Component11 = React.createClass({
	render: function(){
		return (
			<Kind data = {this.props.data}/>
=======

var List = React.createClass({
	render: function(){
		var data = this.props.data;
		return(
			<li className="list">
				<img src={data.img}/>
				<span className="list-content">
					<p>{data.name}</p>
					<p>{data.msg}</p>
					<span>{'月售'+ data.month}</span>
					<span>{'赞'+ data.like}</span>
					<p>{'￥' + data.price}</p>
				</span>
			</li>
		)
	}
})

var FoodList = React.createClass({
	componentWillMount: function(){
		var FoodList = this.props.data[0];
		var item = [];
		var count = 1;
		for(var props in FoodList){
			item.push(<li key={count++} className="title"><i className="box"></i>{props}</li>)
			FoodList[props].forEach(function(ele){
				item.push(<List key= {count ++} data={ele}/>)
			})
		}
		this.item = item;
	},
	componentDidMount: function(){
		touchMove($('.foodItem'), 'up', 0.1)
	},
	render: function(){
		return(
			<div className="food-list">
				<ul className="foodItem">
					{this.item}
				</ul>
			</div>
		)
	}
})

var ShopCart = React.createClass({
	render: function(){
		return (
			<div className="circle"></div>
		)
	}
})

var Cost = React.createClass({
	render: function(){
		return (
			<div className="sum">￥0起送</div>
		)
	}
})
var Bottom = React.createClass({
	render: function(){
		return(
			<div className="btm">
				<ShopCart/>
				<Cost/>
			</div>
		)
	}
})


var Component11 = React.createClass({
	componentDidMount: function(){
		var wHeight = $(window).height();
		$('.food-msg').css('height', wHeight);
	},
	render: function(){
		return (
			<div className="food-msg">
				<KindList data = {this.props.data}/>
				<FoodList data = {this.props.data}/>
				<Bottom/>
			</div>
>>>>>>> dev
		)
	}
})
ReactDom.render(
	<Component11 data = {data}/>,
	$('.shop-list')[0]
)