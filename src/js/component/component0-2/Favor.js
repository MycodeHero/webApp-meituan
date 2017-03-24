require('../../../less/less0-2/Favor.less')
var Title = require('./Title.js')

//引入react的模块依赖
var React = require('react');

//引入食物列表组件
var Foodlist = require('./Foodlist.js')

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

//优惠组件
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
module.exports = Favor;