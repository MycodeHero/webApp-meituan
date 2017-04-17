var React = require('react');
var ReactDom = require('react-dom');
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
	componentWillMount: function(){
		var kindItem = this.props.data[0];
		var item = [];
		var count = 0;
		for(var props in kindItem){
			item.push(<li key = {count++}>{props}</li>)
		}
		this.item = item;
	},
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

var Component11 = React.createClass({
	render: function(){
		return (
			<Kind data = {this.props.data}/>
		)
	}
})
ReactDom.render(
	<Component11 data = {data}/>,
	$('.shop-list')[0]
)