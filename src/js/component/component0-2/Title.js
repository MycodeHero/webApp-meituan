//引入React模块
var React = require('react');

//标题组件
var Title = React.createClass({
    render: function(){
         return (
            <p  className={"title"}>— <span>{this.props.content}</span> —</p>
        )
    }
})

module.exports = Title;

