require('../../../less/less0-2/Discount.less')

//引入Title组件
var Title = require('./Title.js')

//引入食物列表组件
var Foodlist = require('./Foodlist.js');

//引入react的模块依赖
var React = require('react');

//优惠种类组件
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

//优惠组件
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
module.exports = Discount;