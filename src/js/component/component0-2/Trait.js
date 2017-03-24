require('../../../less/less0-2/Trait.less')

//引入Title组件
var Title = require('./Title');

//引入食物列表组件
var Foodlist = require('./Foodlist.js')

//引入react的模块依赖
var React = require('react');

//优惠种类组件
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

//优惠组件
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
module.exports = Triat;