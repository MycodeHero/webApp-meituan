var React = require('react');

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

module.exports = Foodlist;